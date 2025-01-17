    // منع القائمة الافتراضية للنقر بالزر الأيمن
    document.addEventListener("contextmenu", (e) => {
      e.preventDefault(); // منع القائمة الافتراضية
    });

    // منع الضغط الطويل (للأجهزة المحمولة)
    document.addEventListener("mousedown", (e) => {
      if (e.which === 3) { // منع كليك يمين
        e.preventDefault();
      }
    });

    document.addEventListener("touchstart", (e) => {
      if (e.touches.length > 1) { // منع اللمسات المتعددة
        e.preventDefault();
      }
    });

    

// جلب جميع العناصر التي تحمل class 'portfolio-item' 
// واستخدامها لتنفيذ تغييرات الصورة عند التمرير فوق الصورة (hover)
const portfolioItems = document.querySelectorAll(".portfolio-item");

portfolioItems.forEach((item) => {
  // جلب العنصر <img> داخل كل عنصر من عناصر portfolio-item
  const img = item.querySelector("img"); 
  // جلب المسار للصورة الثابتة والصورة المتحركة من البيانات المخزنة داخل العنصر
  const staticImage = item.getAttribute("data-static-image");
  const gifImage = item.getAttribute("data-gif");

  // تعيين الصورة الثابتة عند تحميل الصفحة
  img.src = staticImage;

  // إضافة حدث الـ hover لتغيير الصورة إلى الـ GIF عند التمرير
  
  img.addEventListener("mouseover", () => {
    img.src = gifImage; // تغيير الصورة إلى GIF عند الـ hover
  });
  
  // // إضافة حدث الضغط العادي (click) لفتح الصورة
  // img.addEventListener("click", (e) => {
  //   // منع أي سلوك افتراضي آخر
  //   e.preventDefault();
  //   // تغيير الصورة عند النقر
  //   img.src = gifImage;
  // });
  
  // إعادة الصورة الثابتة عند مغادرة الـ hover
  img.addEventListener("mouseout", () => {
    img.src = staticImage; // العودة إلى الصورة الثابتة عند مغادرة الـ hover
  });
  
});


// النص الذي سيتم كتابته بشكل تدريجي
const text = "Ahmed Topy"; 
const typingElement = document.getElementById("typing");
let index = 0;

// دالة الكتابة التدريجية للنص
function type() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(type, 150); // سرعة الكتابة
  }
}

// دالة التمرير البطيء مع الأنيميشن
function smoothScrollTo(element, duration) {
  const start = window.pageYOffset; // الموضع الحالي
  const end = element.getBoundingClientRect().top + start - 10; // الموضع المستهدف
  const distance = end - start;
  let startTime = null;

  // التحقق إذا كان قد تم التمرير قبل بدء الأنيميشن
  if (start !== window.pageYOffset) {
    return; // إلغاء الأنيميشن إذا تم التمرير بالفعل
  }

  // دالة الأنيميشن الخاصة بالتمرير
  function animationScroll(currentTime) {
    if (!startTime) startTime = currentTime;

    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1); // نسبة التقدم (0 إلى 1)
    const ease = easeInOutQuad(progress); // دالة تسهيل للحركة

    window.scrollTo(0, start + distance * ease);

    if (progress < 1) {
      requestAnimationFrame(animationScroll); // استمر بالأنيميشن
    }
  }

  // دالة تسهيل (Ease In-Out)
  function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  // بدء الأنيميشن
  requestAnimationFrame(animationScroll);
}

// تنفيذ التمرير البطيء بعد تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
  window.scrollTo(0, 0); // التمرير إلى أعلى الصفحة عند تحميلها

  const targetElement = document.querySelector(".desc");

  // تأكد من عدم حدوث تمرير قبل بدء الأنيميشن
  setTimeout(() => {
    if (window.pageYOffset === 0) {
      smoothScrollTo(targetElement, 3000); // مدة التمرير 3 ثوانٍ
    }
  }, 2000); // تأخير 2 ثانية قبل بدء التمرير

  // بدء الكتابة التدريجية للنص
  type();
});

// إنشاء دوائر متحركة بشكل عشوائي في الصفحة
document.querySelectorAll(".circle").forEach((circle) => {
  let randomX1 = Math.random() * 100; /* نقطة بداية عشوائية */
  let randomY1 = Math.random() * 100;
  let randomX2 = Math.random() * 100; /* نقطة منتصف عشوائية */
  let randomY2 = Math.random() * 100;
  let randomX3 = Math.random() * 100; /* نقطة نهاية عشوائية */
  let randomY3 = Math.random() * 100;
  let randoms = Math.random() * 2; /* نقطة نهاية عشوائية */

  // تعيين قيم العشوائية لمواقع حركة الدوائر
  circle.style.setProperty("--start-x", randomX1 + "vw");
  circle.style.setProperty("--start-y", randomY1 + "vh");
  circle.style.setProperty("--mid-x", randomX2 + "vw");
  circle.style.setProperty("--mid-y", randomY2 + "vh");
  circle.style.setProperty("--end-x", randomX3 + "vw");
  circle.style.setProperty("--end-y", randomY3 + "vh");
  circle.style.setProperty("--scale", randoms);
});
window.addEventListener('load', () => {
  // استدعاء الحدث بعد تحميل الصفحة بالكامل
  document.querySelectorAll('img').forEach(img => {
      img.addEventListener('contextmenu', (event) => {
          if (event.button === 2) { // تحقق من أن الزر الذي تم الضغط عليه هو الزر الأيمن
              event.preventDefault(); // منع السلوك الافتراضي (ظهور قائمة السياق)
          }
      });
  });
});