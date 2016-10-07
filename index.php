<?php
    if (isset($_POST["submit"])) {
        $name= $_POST['name'];
        $email= $_POST['email'];
        $subject= $_POST['subject'];
        $reason= $_POST['reason'];
        $message= $_POST['message'];

        $from= 'Website Contact Form';
        $to= 'haydenjamesgriffin@gmail.com';
        $body= "From: $name\n Email Address: $email\n Message: $message";

        if (!$_POST['name']) {
            $errorName = "Please enter a name";
        }

        if (!$_POST['email'] || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
            $errorEmail = "Please enter a valid email address";
        }
        
        if (!$_POST['subject']) {
            $errorSubject = "Please enter a subject";
        }
        
        if (!$_POST['message']) {
            $errorMessage = "Please enter a message";
        }
        
        if (!$errorName && !$errorEmail && !$errorSubject && !$errorMessage) {
            if (mail ($to, $subject, $body, $from)) {
		$result='<div class="alert alert-success">Thank You! I will be in touch</div>';
	} else {
		$result='<div class="alert alert-danger">Sorry there was an error sending your message. Please try again later.</div>';
	}
}
}
?>

<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Hayden Griffin</title>
      <!-- Bootstrap CSS -->
      <link href="css/bootstrap.min.css" rel="stylesheet">
      <!-- Font awesome icons and font -->
      <link href="font-awesome-4.6.3/css/font-awesome.min.css" rel="stylesheet">
      <link href="//fonts.googleapis.com/css?family=Raleway:200,300,400,500,600,700,800,900" rel="stylesheet" type="text/css"/>
      <link href="//fonts.googleapis.com/css?family=Open+Sans:200,300,400,500,600,700,800,900" rel="stylesheet" type="text/css"/>
      <!-- Custom CSS-->
      <link href="css/styles.css" rel="stylesheet">
      <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
      <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
      <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      <![endif]-->
   </head>
   <body>
      <!-- Homepage -->
      <div class="homepage" id="home">
         <div class="col-xs-12 text-center homepage-content">
            <h1 class="homepage-name">Hayden Griffin</h1>
            <h1 class="homepage-typed">
            Stuff here will be typed and deleted</h3>
            <!-- Social buttons -->
            <a href="https://github.com/HaydenGriffin"><i class="fa fa-4x fa-fw fa-github"></i></a>
            <a href="https://facebook.com/hayden.griffin.5"><i class="fa fa-4x fa-fw fa-facebook"></i></a>
            <a href="https://instagram.com/haydengriffin97/"><i class="fa fa-4x fa-fw fa-instagram"></i></a>
            <a href="https://youtube.com/c/HaydenGriffin1"><i class="fa fa-4x fa-fw fa-youtube"></i></a>
         </div>
         <!-- Button container -->
         <div class="col-xs-12 text-center homepage-button">
            <span class="fa-stack fa-2x">
            <i class="fa fa-circle fa-stack-2x"></i>
            <a href="#about"><i class="fa fa-angle-down fa-stack-1x text-primary"></i></a>
            </span>
         </div>
      </div>
      <!-- About page -->
      <div class="container-fluid about-container" id="about">
         <div class="container">
            <div class="row">
               <div class="col-xs-12 col-md-7 col-lg-7">
                  <h1 class="section-heading">Who am I?</h1>
                  <p class="about-text">My name is Hayden Griffin. I'm 19 years old and currently live in Guildford, United Kingdom. I am a second year student, studying Computer Science at the University of Surrey. I am an ambitious, forward thinking developer that loves a challenge.  I'm passionate about new technology and what it can offer us in the future.</p>
                  <p class="about-text">I am currently looking for a relevant internship starting around July 2017 as part of my degree programme. If you wish to contact me about this or any other potential work opportunities, you can reach me by <a href="mailto:haydenjamesgriffin@gmail.com" target="_top">email</a>, or by filling in the form <a href="#contact">here</a>.</p>
               </div>
               <div class="col-xs-12 col-md-5 col-lg-5">
                  <img src="img/me_portrait.jpg" class="img-circle img-responsive center-block" alt="A picture of me in Thailand">
                  <div class="about-information-box">
                     <p><i class="fa fa-user fa-lg fa-fw"></i>&nbsp; Hayden Griffin</p>
                  </div>
                  <div class="about-information-box">
                     <p><i class="fa fa-envelope fa-lg fa-fw"></i>&nbsp; haydenjamesgriffin@gmail.com</p>
                  </div>
                  <div class="about-information-box">
                     <p><i class="fa fa-map-marker fa-lg fa-fw"></i>&nbsp; Guildford, United Kingdom</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!-- Skills page -->
      <div class="container-fluid skills-container" id="skills">
         <div class="container">
            <div class="row">
               <div class="col-xs-12 text-center">
                  <h1 class="section-heading">Technical Skills</h1>
                  <p>I always strive to learn as much as I can about programming.</p>
               </div>
            </div>
            <div class="row table-style text-center">
               <div class="col-xs-12">
                  <h2 class="skills-heading">Experienced with</h2>
               </div>
               <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                  <p>Java</p>
               </div>
               <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                  <p>HTML5</p>
               </div>
               <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                  <p>CSS3</p>
               </div>
               <div class="col-xs-12">
                  <hr>
                  <h2 class="skills-heading">Somewhat comfortable with</h2>
               </div>
               <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                  <p>Python</p>
               </div>
               <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                  <p>PHP</p>
               </div>
               <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                  <p>SQL</p>
               </div>
               <div class="col-xs-12">
                  <hr>
                  <h2 class="skills-heading">Currently learning</h2>
               </div>
               <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                  <p>Javascript</p>
               </div>
               <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                  <p>JQuery</p>
               </div>
               <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                  <p>Rails</p>
               </div>
               <div class="col-xs-12 col-sm-6 col-md-12 col-lg-12">
                  <p>Django</p>
               </div>
            </div>
         </div>
      </div>
      <!-- Portfolio page -->
      <div class="container-fluid portfolio-container" id="portfolio">
         <div class="container">
            <div class="row">
               <div class="col-xs-12 text-center">
                  <h1 class="section-heading">My Projects</h1>
               </div>
            </div>
         </div>
      </div>
      <!-- Contact page -->
      <div class="container-fluid contact-container bg-grey" id="contact">
         <div class="container">
            <div class="row">
               <div class="col-xs-12 text-center">
                  <h1 class="section-heading">Contact Me</h1>
               </div>
               <form class="form-horizontal">
                  <div class="form-group">
                     <div class="col-md-6 col-md-offset-3">
                        <input type="text" class="form-control" id="name" placeholder="Name"
                               value="<?php echo htmlspecialchars($_POST['name']); ?>">
                         <?php echo "<p class='text-danger'>$errorName</p>";?>
                     </div>
                  </div>
                  <div class="form-group">
                     <div class="col-md-6 col-md-offset-3">
                        <input type="email" class="form-control" id="email" placeholder="Email Address"
                               value="<?php echo htmlspecialchars($_POST['email']); ?>">
                         <?php echo "<p class='text-danger'>$errorEmail</p>";?>
                     </div>
                  </div>
                  <div class="form-group">
                     <div class="col-md-6 col-md-offset-3"> 
                        <input type="text" class="form-control" id="subject" placeholder="Subject"
                               value="<?php echo htmlspecialchars($_POST['subject']); ?>">
                         <?php echo "<p class='text-danger'>$errorSubject</p>";?>
                     </div>
                  </div>
                   <div class="form-group">
                       <div class="col-md-6 col-md-offset-3">
                   <select class="form-control" id="reason" placeholder="Reason for contact"
                           value="<?php echo htmlspecialchars($_POST['reason']); ?>">
                       <option>General contact</option>
                       <option>Application Idea</option>
                       <option>Placement Opportunity</option>
                       <option>Work Experience</option>
                       <option>Other</option>
                       </select>
                   </div>
                       </div>
                  <div class="form-group">
                     <div class="col-md-6 col-md-offset-3">
                        <textarea class="form-control" rows="4" name="message" placeholder="Message"
                                  value="<?php echo htmlspecialchars($_POST['message']); ?>"></textarea>
                         <?php echo "<p class='text-danger'>$errorMessage</p>";?>
                     </div>
                  </div>
                  <div class="form-group">
                     <div class="col-xs-12 text-center">
                        <button type="submit" class="btn btn-primary">Submit</button>
                     </div>
                  </div>
                   <div class="form-group">
                   <div class="col-md-4 col-md-offset-4">
                       <?php echo $result; ?>
                       </div>
                   </div>
               </form>
            </div>
         </div>
      </div>
      <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
      <!-- Include all compiled plugins (below), or include individual files as needed -->
      <script src="js/bootstrap.min.js"></script>
   </body>
</html>