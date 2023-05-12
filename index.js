const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs')
const mongoose = require('mongoose');
const XLSX = require('xlsx');
const { addListener } = require('nodemon');

mongoose.connect("mongodb+srv://lonely1:24810@cluster0.wk0dk.mongodb.net/MySchedule");
const UserRegistration = ({

    name: String,
    email: String,
    password: String

});

const NewRegistrations = mongoose.model("NewRegistrations", UserRegistration);

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));



app.get('/', (req, res) => {
    res.render('home', {});
})

app.get('/home', (req, res) => {
    res.render('home1', {});
})


app.get('/signup', (req, res) => {
    res.render('signup', {})
})

app.get('/signin', (req, res) => {
    res.render('signin', {})
});


app.get('/filter', (req, res) => {
    res.render('filter', {});
})

app.get('/filter2',(req,res)=>{
    res.render('filter2',{});
})


app.post('/signup', (req, res) => {
    var name = req.body.Name;
    var email = req.body.Email;
    var password = req.body.Password;
    var confirmPassword = req.body.Confirm_Password;

    if (password == confirmPassword) {

        var newRegistration = new NewRegistrations({

            name: name,
            email: email,
            password: password,

        });

        newRegistration.save();
        res.redirect('/signIn');



    } else {

        res.redirect('/signUp');


    }
});




app.post('/signIn', async (req, res) => {

    var email = req.body.Email;
    var password = req.body.Password;



    const Uloggedin = await NewRegistrations.findOne({ email: email });


    if (Uloggedin.password == password) {

        ActiveId = Uloggedin._id;

        res.redirect('/home');

    } else {
        res.redirect('/signIn');
    }



});

app.post('/filter', (req, res) => {

    var entered = req.body.teacherCode;

    console.log(entered);

    var   Nine = []
    var  Ten = []
    var  Eleven = []
    var  Twelve = []
    var  One = []
    var  Two = []
    var  Three = []
    var  Four = []
    var d1 = []


    let workbook1 = XLSX.readFile("new2.xlsx")
    let worksheet1 = workbook1.Sheets[workbook1.SheetNames[0]];

    var day = "";

    for (let i = 1; i < 900; i++) {
        var count = 0;
        
        if ((worksheet1[`A${i}`].v) == entered) {
            
            for (m = i+1; m < i + 7; m++) {
                count+=1;
                // if(count=1){
                //   day = "Monday"
                // }
                // if(count=2){
                //     day = "Tuesday"
                //   }
                //   if(count=3){
                //     day = "Wednesday"
                //   }
                //   if(count=4){
                //     day = "Thursday"
                //   }
                //   if(count=5){
                //     day = "Friday"
                //   }
                //   if(count=6){
                //     day = "Saurday"
                //   }
                console.log({
                    Nine: worksheet1[`B${m}`].v,
                    Ten: worksheet1[`C${m}`].v,
                    Eleven: worksheet1[`D${m}`].v,
                    Twelve: worksheet1[`E${m}`].v,
                    One: worksheet1[`F${m}`].v,
                    Two: worksheet1[`G${m}`].v,
                    Three: worksheet1[`H${m}`].v,
                    Four: worksheet1[`H${m}`].v

                }, "Day = ", count);

                

                


               Nine.push(worksheet1[`B${m}`].v);
               Ten.push(worksheet1[`C${m}`].v);
               Eleven.push(worksheet1[`D${m}`].v);
               Twelve.push(worksheet1[`E${m}`].v);
               One.push(worksheet1[`F${m}`].v);
               Two.push(worksheet1[`G${m}`].v);
               Three.push(worksheet1[`H${m}`].v);
               Four.push(worksheet1[`H${m}`].v);
               d1.push(count)

               




            }
            
        }

    }

    res.render('output2', {
          Teacher: entered,
          arr:Nine.length,
          Nine:Nine,
          Ten:Ten,
          Eleven:Eleven,
          Twlve:Twelve,
          One:One,
          Two:Two,
          Three:Three,
          Four:Four,
          d:d1
    });


    Nine = []
    Ten = []
    Eleven = []
    Twelve = []
    One = []
    Two = []
    Three = []
    Four = []
    d1 = []


});


app.post('/filter2', (req, res) => {

    var entered1 = req.body.venueCode;

    console.log(entered1);

    var   Nine = []
    var  Ten = []
    var  Eleven = []
    var  Twelve = []
    var  One = []
    var  Two = []
    var  Three = []
    var  Four = []
    var d1 = []


    let workbook2 = XLSX.readFile("new3.xls")
    let worksheet2 = workbook2.Sheets[workbook2.SheetNames[0]];

    var day = "";

    for (let i = 1; i < 900; i++) {
        var count = 0;
        
        if ((worksheet2[`A${i}`].v) == entered1) {
            
            for (m = i+1; m < i + 7; m++) {
                count+=1;
                // if(count=1){
                //   day = "Monday"
                // }
                // if(count=2){
                //     day = "Tuesday"
                //   }
                //   if(count=3){
                //     day = "Wednesday"
                //   }
                //   if(count=4){
                //     day = "Thursday"
                //   }
                //   if(count=5){
                //     day = "Friday"
                //   }
                //   if(count=6){
                //     day = "Saurday"
                //   }
                console.log({
                    Nine: worksheet2[`B${m}`].v,
                    Ten: worksheet2[`C${m}`].v,
                    Eleven: worksheet2[`D${m}`].v,
                    Twelve: worksheet2[`E${m}`].v,
                    One: worksheet2[`F${m}`].v,
                    Two: worksheet2[`G${m}`].v,
                    Three: worksheet2[`H${m}`].v,
                    Four: worksheet2[`H${m}`].v

                }, "Day = ", count);

                

                


               Nine.push(worksheet2[`B${m}`].v);
               Ten.push(worksheet2[`C${m}`].v);
               Eleven.push(worksheet2[`D${m}`].v);
               Twelve.push(worksheet2[`E${m}`].v);
               One.push(worksheet2[`F${m}`].v);
               Two.push(worksheet2[`G${m}`].v);
               Three.push(worksheet2[`H${m}`].v);
               Four.push(worksheet2[`H${m}`].v);
               d1.push(count)

               




            }
            
        }

    }

    res.render('output3', {
          Venue: entered1,
          arr:Nine.length,
          Nine:Nine,
          Ten:Ten,
          Eleven:Eleven,
          Twlve:Twelve,
          One:One,
          Two:Two,
          Three:Three,
          Four:Four,
          d:d1
    });


    Nine = []
    Ten = []
    Eleven = []
    Twelve = []
    One = []
    Two = []
    Three = []
    Four = []
    d1 = []


});


// app.get('/filter',(req,res)=>{
//     res.render('')
// })


app.post("/home", (req, res) => {

    var batch = req.body.batch;
    var t_c = req.body.teacherCode;
    var sbj_c = req.body.subjectCode;
    // JSON.stringify(time)

    var s_c = []
    var v = []
    var t = []
    var t_c1 = []
    var day = []



    console.log(t_c);

    var workbook = XLSX.readFile("new.xls");
    let worksheet = workbook.Sheets[workbook.SheetNames[0]];

    let array = []

    for (let i = 1; i < 400; i++) {
        const VenueAndDay = worksheet[`A${i}`]
        const NineAM = worksheet[`B${i}`]
        const TenAM = worksheet[`C${i}`]
        const ElevenAM = worksheet[`D${i}`]


        if ((worksheet[`B${i}`].v) == sbj_c && (worksheet[`C${i}`].v) == batch) {
            console.log({
                Subject_Code: worksheet[`B${i}`].v,
                Venue: worksheet[`E${i}`].v,
                Time: worksheet[`G${i}`].v,
                T_C: worksheet[`D${i}`].v,
                Day: worksheet[`F${i}`].v
            });
            s_c.push(worksheet[`B${i}`].v);
            v.push(worksheet[`E${i}`].v);
            t.push(worksheet[`G${i}`].v);
            day.push(worksheet[`F${i}`].v);
            t_c1.push(worksheet[`D${i}`].v);

        } else {
            // s_c.push(worksheet[`B${i}`].v);
            // v.push(worksheet[`E${i}`].v);
            // t.push(worksheet[`G${i}`].v);
            // day.push(worksheet[`F${i}`].v);
            // t_c1.push(worksheet[`D${i}`].v);

        }


    }

    res.render('output1', {
        n: s_c.length,
        sbj_code: s_c,
        ven: v,
        tm: t,
        tchr_code: t_c1,
        d: day

    });

    s_c = []
    v = []
    t = []
    t_c1 = []
    day = []










}

);



app.listen(2004, function () {
    console.log("listening to 2004...");
})