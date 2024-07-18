<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./style.css">
  <link rel="stylesheet" href="./welcome.php">
  <title>Submit Form</title>
</head>
<body>

  
 
  <form id="form" action="./welcome.php" method="post">

    <div id="container"> 

      <div class="image">
        <img src="./animated.png" alt="">
      </div>


      <div class="content">
   
        <label for="name"><b>Username</b></label>
        <input type="text" id="name" placeholder="Enter Username">
      
      
       
          <label for="password"><b>Password</b></label>
          <input type="password" id="password" placeholder="Enter Password" >
        
          <input type="submit" id="submit" value="Login" >
        
          
          <div class="cancel">
            <div>
              <input type="checkbox">
              <label for="checkbox">Remember Me</label>
            </div>
           
            <hr>
            <input id="reset" type="reset" value="Cancel">

            <div>
              Dont have an account? <a href="./register.html">Sign Up Here</a>
            </div>
          </div> 
      </div>

    </div>
   
    
      
     
    
   
  
  </form>

</body>
</html>