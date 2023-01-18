import mongoose from "mongoose";

mongoose.set("strictQuery", false);

(async () => {
  try {
    const db = await mongoose.connect("mongodb://localhost/auth-proyect");
    console.log("DB contected to", db.connection.name);
  } catch (error) {
    console.log(error);
  }
})();
