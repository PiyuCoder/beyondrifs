const Demo = require("../models/Demo");

exports.bookDemo = async (req, res) => {
  try {
    const { formData } = req.body;

    const existingBooking = await Demo.findOne({ email: formData.email });

    if (existingBooking)
      return res
        .status(400)
        .json({ success: false, message: "You already have a booking" });

    const newBooking = await Demo.create(formData);

    return res.status(200).json({
      success: true,
      message: `Thank you ${formData.name.split(" ")[0]} for booking the demo!`,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Error while booking the demo." });
  }
};
