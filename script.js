document.getElementById('absence-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const studentName = document.getElementById('student-name').value;
  const teacherName = "جملاء";
  const subject = "تقنيه";
  const reason = "الخروج المؤقت";
  const movementType = document.getElementById('movement-type').value;
  const timestampInput = document.getElementById('timestamp').value;

  if (!timestampInput) {
    alert("الرجاء إدخال الوقت");
    return;
  }

  const timestamp = new Date(timestampInput);
  let resultMessage = '';

  if (movementType === 'رجوع') {
    const exitTimeStr = localStorage.getItem('exitTime');
    const exitTime = exitTimeStr ? new Date(exitTimeStr) : null;

    if (exitTime) {
      const durationMinutes = Math.ceil((timestamp - exitTime) / 60000);
      if (durationMinutes < 0) {
        resultMessage = "<p>خطأ: وقت الرجوع قبل وقت الخروج.</p>";
      } else {
        resultMessage = `
          <h2>تصريح الرجوع</h2>
          <p><strong>اسم الطالبة:</strong> ${studentName}</p>
          <p><strong>اسم المعلمة:</strong> ${teacherName}</p>
          <p><strong>المادة:</strong> ${subject}</p>
          <p><strong>الغرض:</strong> ${reason}</p>
          <p><strong>الوقت:</strong> ${timestamp.toLocaleString()}</p>
          <p><strong>مدة الغياب:</strong> ${durationMinutes} دقيقة</p>
          <p><strong>تصريح الرجوع: تم بنجاح!</strong></p>
        `;
      }
    } else {
      resultMessage = "<p>لا يوجد وقت خروج مسجل، تأكدي من تسجيل الخروج أولًا.</p>";
    }
  } else {
    localStorage.setItem('exitTime', timestampInput);
    resultMessage = `
      <h2>تصريح الخروج</h2>
      <p><strong>اسم الطالبة:</strong> ${studentName}</p>
      <p><strong>اسم المعلمة:</strong> ${teacherName}</p>
      <p><strong>المادة:</strong> ${subject}</p>
      <p><strong>الغرض:</strong> ${reason}</p>
      <p><strong>الوقت:</strong> ${timestamp.toLocaleString()}</p>
      <p><strong>تصريح الخروج: تم بنجاح!</strong></p>
    `;
  }

  document.getElementById('result').innerHTML = resultMessage;
});
