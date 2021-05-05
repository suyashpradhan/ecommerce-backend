const mongoose = require("mongoose");
const { Schema } = mongoose;

const wishlistSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    ref: "product",
  },
  isInWishlist: Boolean,
});

const Wishlist = mongoose.model("wishlist", wishlistSchema);

module.exports = Wishlist;
