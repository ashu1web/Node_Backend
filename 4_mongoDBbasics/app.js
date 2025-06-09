const mongoose = require("mongoose");

mongoose
  .connect(
    "your_URL"
  )
  .then(() => console.log("database connected successfully"))
  .catch((e) => console.log(e));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  isActive: Boolean,
  tags: [String],
  createdAt: { type: Date, default: Date.now },
});

//create user model
const User = mongoose.model("User", userSchema);

async function runQueryExample(params) {
      try{
         //create a new document
         const newUser= await User.create({
               name: 'Ashutosh Sharma',
               email: 'ashu@gmail.com',
               age: 23,
               isActive: true,
               tags: ["developer"],
         })

          /*
              const newUser= new User({
               name: 'user2',
               email: 'user2@gmail.com',
               age: 23,
               isActive: true,
               tags: ["designer"],
         })
                
               await newUser.save() 
         */

         console.log("newUser->",newUser)

    // const allUsers = await User.find({});                                -->every matching document
    // console.log(allUsers);
    // const getUserOfActiveFalse = await User.find({ isActive: true });
    // console.log(getUserOfActiveFalse);

    // const getJohnDoeUser = await User.findOne({ name: "John Doe" });    -->gives the first matching document
    // console.log(getJohnDoeUser);


    // const getLastCreatedUserByUserId = await User.findById(newUser._id);  -->finding newuser on the basis newuser_.id
    // console.log(getLastCreatedUserByUserId, "getLastCreatedUserByUserId");

    // const selectedFields = await User.find().select("name email -_id");   -->getting back only the selected fields(No _id becaue of minus sign )
    // console.log(selectedFields);

    // const limitedUsers = await User.find().limit(5).skip(1);              -->5 users skip the first
    // console.log(limitedUsers);

    // const sortedUsers = await User.find().sort({ age: 1 });              -->Sorting on age and in ASC order
    // console.log(sortedUsers);

    // const countDocuments = await User.countDocuments({ isActive: true }); -->counting documents
    // console.log(countDocuments);
 
    // const deletedUser = await User.findByIdAndDelete(newUser._id);        -->delete newuser
    // console.log("deleted user ->", deletedUser);

    const updateUser = await User.findByIdAndUpdate(
      newUser._id,
      {
        $set: { age: 100 },
        $push: { tags: "updated" },
      },
      { new: true }
    );
    console.log("updated user", updateUser);
      }catch(e){
           console.log("Error->",e)
      }finally{
        await mongoose.connection.close()
      }
}

runQueryExample()
