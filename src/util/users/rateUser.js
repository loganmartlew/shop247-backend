const { User } = require('@models/User');

const rateUser = async (ratedUserId, ratingUserId, rating) => {
  try {
    const user = await User.findOne({ uid: ratedUserId });

    const userRatingObj = {
      rating: -1,
      reviews: [],
      ...user.rating,
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
    const newRating = Math.round(sumRatings / userRatingObj.reviews.length);

    userRatingObj.rating = newRating;

    user.rating = userRatingObj;
    const updatedUser = await user.save();
    return updatedUser;
  } catch (err) {
    return null;
  }
};

module.exports = { rateUser };
