//creating create api endpoint
const express = require('express')
const app = express()
const Create = require('../fleo/models/models')
app.use(express.json());

const router = express.Router();

router.post('/create', function(req, res){
  res.send({
      type: 'POST',
      Current_sales: req.body.Current_sales,
      Target_sales: req.body.Target_sales,
      ID: req.body.id,
      Progress_per: req.body.progress_per,
      Bar_colour: req.body.Bar_colour,
      Category_name: req.body.Category_name,
      Progress_label: req.body.Progress_label
  });
});

module.exports = router;
// app.post("/add_user", async (request, response) => {
//     const user = new userModel(request.body);
  
//     try {
//       await user.save();
//       response.send(user);
//     } catch (error) {
//       response.status(500).send(error);
//     }
// });

// app.get("/users", async (request, response) => {
//     const users = await userModel.find({});
  
//     try {
//       response.send(users);
//     } catch (error) {
//       response.status(500).send(error);
//     }
//   });
