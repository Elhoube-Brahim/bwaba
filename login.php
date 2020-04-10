<?php include 'layout/header.html'; ?>

<div class="login">
  <div class="container flex">
    <form class="login-form card">
      <div class="tab-headers flex">
        <div class="login-tab-header tab-header active" data-tab="login">تسجيل الدخول</div>
        <div class="signup-tab-header tab-header" data-tab="signup">حساب جديد</div>
      </div>
      <div class="tab-content">
        <div class="login-tab tab active flex" id="login">
          <div class="input-gp">
            <label for="email">البريد الإلكتروني</label>
            <input type="text" dir="ltr" class="input email" name="email" placeholder="example@example.com">
            <i class="fa fa-user" aria-hidden="true"></i>
          </div>
          <div class="input-gp">
          <label for="pwd">كلمة السر</label>
            <input type="password" class="input" name="pwd" >
            <i class="fa fa-eye show-pwd" aria-hidden="true"></i>
          </div>
          <div class="forgotten flex">
            <div class="remember">
              <label><input type="checkbox"> تذكرني</label>
            </div>
            <a href="">نسيت كلمة السر؟</a>
          </div>
          <div class="login-btns">
            <button class="login-btn">تسجيل الدخول</button>
            <div class="or flex">
              <button class="login-btn facebook">
                أو سجل بحساب 
                <i class="fa fa-facebook" aria-hidden="true"></i>
              </button>
                <button class="login-btn google">
                أو سجل بحساب 
                <i class="fa fa-google" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="login-tab tab flex" id="signup">
          <div class="input-gp">
            <label for="email">الإسم الكامل :</label>
            <input type="text" class="input" name="email" placeholder="الإسم الكامل ...">
            <i class="fa fa-user" aria-hidden="true"></i>
          </div>
          <div class="input-gp">
            <label for="email">الإسم المستعار :</label>
            <input type="text" class="input" name="email" placeholder="الإسم المستعار ...">
            <i class="fa fa-user" aria-hidden="true"></i>
          </div>
          <div class="input-gp">
            <label for="email">البريد الإلكتروني :</label>
            <input type="text" class="input email" dir="ltr" name="email" placeholder="example@example.com">
            <i class="fa fa-user" aria-hidden="true"></i>
          </div>
          <div class="input-gp">
          <label for="pwd">كلمة السر :</label>
            <input type="password" class="input" name="pwd">
            <i class="fa fa-eye show-pwd" aria-hidden="true"></i>
          </div>
          <div class="login-btns">
            <button class="login-btn">أنشئ الحساب</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</div>

<?php include 'layout/footer.html'; ?>
