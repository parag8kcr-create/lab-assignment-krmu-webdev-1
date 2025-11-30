(function() {
  const quizQuestions = [
    { q: "Capital of India?", a: "delhi" },
    { q: "2 + 2 = ?", a: "4" },
    { q: "Largest planet in our solar system?", a: "jupiter" },
    { q: "HTML stands for (full form)?", a: "hyper text markup language" },
    { q: "CSS is mainly used for?", a: "styling" }
  ];

  const synonyms = {
    delhi: ["delhi", "new delhi"]
  };

  function normalize(s) {
    return String(s || "").toLowerCase().trim();
  }

  function isCorrect(user, correct) {
    user = normalize(user);
    correct = normalize(correct);
    if (user === correct) return true;
    // check synonyms
    const syn = synonyms[correct];
    if (Array.isArray(syn) && syn.includes(user)) return true;
    // numeric compare
    if (!isNaN(Number(user)) && !isNaN(Number(correct))) {
      return Number(user) === Number(correct);
    }
    return false;
  }

  function runQuiz() {
    let score = 0;
    alert("Welcome to the Simple JS Quiz!\nYou will be shown questions using prompt(). Type answer and press OK.");

    for (let i = 0; i < quizQuestions.length; i++) {
      const q = quizQuestions[i];
      let answer = prompt(`Question ${i+1}/${quizQuestions.length}:\n${q.q}`);

      
      if (answer === null) answer = "";

      if (isCorrect(answer, q.a)) {
        score++;
        alert("✅ Correct!");
      } else if (answer.trim() === "") {
        alert("⚠️ Skipped. Correct answer: " + q.a);
      } else {
        alert("❌ Wrong. Correct answer: " + q.a);
      }
    }

    alert(`Quiz finished!\nYour score: ${score} / ${quizQuestions.length}`);
  }

  runQuiz();
})();
