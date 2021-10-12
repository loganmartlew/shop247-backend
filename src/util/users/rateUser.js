const { User } = require('@models/User');

const rateUser = async (ratedUserId, ratingUserId, rating) => {
  if (!rating) return null;
  if (typeof rating !== 'number') return null;
  if (rating < 0) return null;
  if (rating > 5) return null;

  try {
    const user = await User.findOne({ uid: ratedUserId });

    const userRatingObj = {
      rating: user.rating?.rating ?? -1,
      reviews: user.rating?.reviews ?? [],
    };

    const userHasRated = userRatingObj.reviews.reduce((rated, curr) => {
      if (curr.uid === ratingUserId) {
        return true;
      }
      return rated;
    }, false);

    const newRating = {
      uid: ratingUserId,
      rating,
    };

    if (userHasRated) {
      const newReviews = userRatingObj.reviews.filter(
        review => review.uid !== ratingUserId
      );

      newReviews.push(newRating);

      userRatingObj.reviews = newReviews;
    } else {
      userRatingObj.reviews.push(newRating);
    }

    const sumRatings = userRatingObj.reviews.reduce(
      (rating, curr) => rating + curr.rating,
      0
    );
    const newRatingNumber = Math.round(
      sumRatings / userRatingObj.reviews.length
    );

    userRatingObj.rating = newRatingNumber;

    user.rating = userRatingObj;
    const updatedUser = await user.save();
    return updatedUser;
  } catch (err) {
    return null;
  }
};

module.exports = { rateUser };
