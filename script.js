<!DOCTYPE html>
<html lang="ar">
<head>
  <meta charset="UTF-8">
  <title>تصريح خروج طالبة</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h1>نموذج تصريح الخروج</h1>
    <form id="absence-form">
      <label for="student-name">اسم الطالبة:</label>
      <input type="text" id="student-name" required>

      <label for="movement-type">نوع الحركة:</label>
      <select id="movement-type" required>
        <option value="خروج">خروج</option>
        <option value="رجوع">رجوع</option>
      </select>

      <label for="timestamp">الوقت:</label>
      <input type="datetime-local" id="timestamp" required>

      <button type="submit">إرسال</button>
    </form>

    <div id="result"></div>
  </div>

  <script src="script.js"></script>
</body>
</html>
