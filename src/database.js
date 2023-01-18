import mongoose from "mongoose";

mongoose.set("strictQuery", false);

(async () => {
  try {
    const db = await mongoose.connect(
      "mongodb+srv://gmutti:08012003@cluster0.wkt25d7.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("DB contected to", db.connection.name);
  } catch (error) {
    console.log(error);
  }
})();
