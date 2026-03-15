export const DAYS_13_20 = {  day13: {
    lesson: {
      title: "Special Factoring Patterns",
      subtitle: "Spot the shortcut — learn to recognize and factor perfect squares, difference of squares, and cubes.",
      sections: [
        {
          heading: "Difference of Squares",
          paragraphs: [
            "Some expressions have a special structure that lets you factor them <em>instantly</em> once you recognize the pattern. The most common is the <strong>difference of squares</strong>: a<sup>2</sup> &minus; b<sup>2</sup> = (a + b)(a &minus; b). Notice it only works for <em>subtraction</em> — a sum of two squares (a<sup>2</sup> + b<sup>2</sup>) does <strong>not</strong> factor over the real numbers.",
            "How do you spot it? Ask yourself: (1) Are there exactly two terms? (2) Is one being subtracted from the other? (3) Is each term a perfect square? If the answer to all three is <em>yes</em>, you have a difference of squares. For instance, x<sup>2</sup> &minus; 25 fits because x<sup>2</sup> is (x)<sup>2</sup> and 25 is (5)<sup>2</sup>. So x<sup>2</sup> &minus; 25 = (x + 5)(x &minus; 5).",
            "This pattern works for any perfect squares, not just simple variables. For example, 9a<sup>2</sup> &minus; 16b<sup>2</sup> = (3a)<sup>2</sup> &minus; (4b)<sup>2</sup> = (3a + 4b)(3a &minus; 4b). Always check for a GCF first — sometimes pulling out a common factor <em>reveals</em> a hidden difference of squares underneath."
          ],
          example: {
            title: "Worked Example: Difference of Squares",
            problem: "Factor completely: 50x<sup>2</sup> &minus; 18.",
            steps: [
              "Look for a GCF first: 50x<sup>2</sup> and 18 are both divisible by 2. Factor it out: 2(25x<sup>2</sup> &minus; 9).",
              "Now examine 25x<sup>2</sup> &minus; 9. Is each term a perfect square? 25x<sup>2</sup> = (5x)<sup>2</sup> and 9 = (3)<sup>2</sup>. Yes!",
              "Apply the pattern: 25x<sup>2</sup> &minus; 9 = (5x + 3)(5x &minus; 3).",
               "Final answer: <strong>2(5x + 3)(5x &minus; 3)</strong>."
             ]
           },
           practice: [
             {
               type: "type-answer",
               prompt: "Factor: x<sup>2</sup> &minus; 49. Write the factored form.",
               answer: "(x+7)(x-7)",
               accept: ["(x+7)(x-7)", "(x + 7)(x − 7)", "(x-7)(x+7)", "(x − 7)(x + 7)"],
               explanation: "Difference of squares: x<sup>2</sup> &minus; 49 = x<sup>2</sup> &minus; 7<sup>2</sup> = (x + 7)(x &minus; 7)."
             },
             {
               type: "type-answer",
               prompt: "Factor: 4x<sup>2</sup> &minus; 25. Write the factored form.",
               answer: "(2x+5)(2x-5)",
               accept: ["(2x+5)(2x-5)", "(2x + 5)(2x − 5)", "(2x-5)(2x+5)", "(2x − 5)(2x + 5)"],
               explanation: "(2x)<sup>2</sup> &minus; 5<sup>2</sup> = (2x + 5)(2x &minus; 5)."
             },
             {
               type: "multiple-quick",
               prompt: "Which expression is a difference of squares?",
               options: ["x<sup>2</sup> &minus; 16", "x<sup>2</sup> + 16", "x<sup>2</sup> &minus; 15"],
               correct: 0,
               explanation: "x<sup>2</sup> &minus; 16 = x<sup>2</sup> &minus; 4<sup>2</sup> is a difference of two perfect squares."
             }
           ]
         },
         {
           heading: "Perfect Square Trinomials",
          paragraphs: [
            "A <strong>perfect square trinomial</strong> is what you get when you square a binomial. There are two forms: a<sup>2</sup> + 2ab + b<sup>2</sup> = (a + b)<sup>2</sup> and a<sup>2</sup> &minus; 2ab + b<sup>2</sup> = (a &minus; b)<sup>2</sup>. The key fingerprint is that the middle term is <em>exactly</em> twice the product of the square roots of the first and last terms.",
            "Think of it like checking a password: if the first term is a perfect square, the last term is a perfect square, and the middle term equals 2 &times; (root of first) &times; (root of last), then you have a match! For example, x<sup>2</sup> + 10x + 25: the square root of x<sup>2</sup> is x, the square root of 25 is 5, and 2 &times; x &times; 5 = 10x. That matches the middle term, so x<sup>2</sup> + 10x + 25 = (x + 5)<sup>2</sup>.",
            "Be careful with the sign of the middle term — it tells you whether you use plus or minus inside the parentheses. If the middle term is negative, like x<sup>2</sup> &minus; 14x + 49, the factored form is (x &minus; 7)<sup>2</sup>. The last term in a perfect square trinomial is <em>always positive</em> (since you are squaring something)."
          ],
          example: {
            title: "Worked Example: Perfect Square Trinomial",
            problem: "Factor: 4x<sup>2</sup> + 20x + 25.",
            steps: [
              "Check the first term: 4x<sup>2</sup> = (2x)<sup>2</sup>. ✓",
              "Check the last term: 25 = (5)<sup>2</sup>. ✓",
              "Check the middle term: 2 &times; 2x &times; 5 = 20x. ✓ It matches!",
              "Since the middle term is positive, the answer is: <strong>(2x + 5)<sup>2</sup></strong>."
            ]
          }
        },
        {
          heading: "Sum and Difference of Cubes",
          paragraphs: [
            "While a sum of <em>squares</em> doesn't factor, a sum (or difference) of <em>cubes</em> does! The formulas are: a<sup>3</sup> + b<sup>3</sup> = (a + b)(a<sup>2</sup> &minus; ab + b<sup>2</sup>) and a<sup>3</sup> &minus; b<sup>3</sup> = (a &minus; b)(a<sup>2</sup> + ab + b<sup>2</sup>). A handy mnemonic is <strong>SOAP</strong>: the signs go <strong>S</strong>ame, <strong>O</strong>pposite, <strong>A</strong>lways <strong>P</strong>ositive.",
            "Here's what SOAP means: the sign in the binomial factor is the <em>Same</em> as the original; the first sign in the trinomial factor is the <em>Opposite</em>; and the last sign in the trinomial factor is <em>Always Positive</em>. So for a<sup>3</sup> &minus; b<sup>3</sup>, the binomial is (a <strong>&minus;</strong> b) (Same), and the trinomial is (a<sup>2</sup> <strong>+</strong> ab <strong>+</strong> b<sup>2</sup>) (Opposite, Always Positive).",
            "You should memorize the first several perfect cubes: 1, 8, 27, 64, 125, 216. Recognizing these quickly will help you spot sum/difference of cubes patterns. For example, x<sup>3</sup> + 27 = x<sup>3</sup> + 3<sup>3</sup> = (x + 3)(x<sup>2</sup> &minus; 3x + 9)."
          ],
          example: {
            title: "Worked Example: Difference of Cubes",
            problem: "Factor: 8y<sup>3</sup> &minus; 125.",
            steps: [
              "Identify the cubes: 8y<sup>3</sup> = (2y)<sup>3</sup> and 125 = (5)<sup>3</sup>.",
              "Apply the difference-of-cubes formula with a = 2y and b = 5.",
              "Binomial factor (Same sign as original): (2y &minus; 5).",
              "Trinomial factor (Opposite, Always Positive): (2y)<sup>2</sup> + (2y)(5) + (5)<sup>2</sup> = 4y<sup>2</sup> + 10y + 25.",
              "Final answer: <strong>(2y &minus; 5)(4y<sup>2</sup> + 10y + 25)</strong>."
            ]
          }
        },
        {
          heading: "Choosing the Right Pattern",
          paragraphs: [
            "When you see a factoring problem, always follow this order: <strong>Step 1:</strong> Factor out the GCF. <strong>Step 2:</strong> Count the terms. Two terms? Check for difference of squares or sum/difference of cubes. Three terms? Check for a perfect square trinomial, and if not, use standard trinomial factoring. Four terms? Try factoring by grouping.",
            "Sometimes you need to apply more than one pattern. For example, x<sup>4</sup> &minus; 16 is a difference of squares: (x<sup>2</sup> + 4)(x<sup>2</sup> &minus; 4). But x<sup>2</sup> &minus; 4 is <em>itself</em> a difference of squares! So the fully factored form is (x<sup>2</sup> + 4)(x + 2)(x &minus; 2). Always check whether your factors can be factored further.",
            "Real-world connection: engineers use the difference-of-squares pattern when simplifying formulas for stress and strain. Physicists use it in the formula for kinetic energy differences. Recognizing these patterns isn't just an algebra trick — it's a skill professionals use every day to simplify complex calculations."
          ]
        }
      ]
    },
    quiz: [
      {
        id: "d13q1", question: "Factor: x<sup>2</sup> &minus; 49.",
        type: "multiple-choice",
        options: ["(x + 7)(x &minus; 7)","(x &minus; 7)<sup>2</sup>","(x + 49)(x &minus; 1)","(x + 7)<sup>2</sup>"],
        correct: 0,
        explanation: "Difference of squares: x<sup>2</sup> &minus; 7<sup>2</sup> = <strong>(x + 7)(x &minus; 7)</strong>.",
        difficulty: "easy", category: "topic"
      },
      {
        id: "d13q2", question: "Factor: x<sup>2</sup> + 6x + 9.",
        type: "multiple-choice",
        options: ["(x + 3)<sup>2</sup>","(x + 9)(x + 1)","(x + 3)(x &minus; 3)","(x &minus; 3)<sup>2</sup>"],
        correct: 0,
        explanation: "Perfect square trinomial: x<sup>2</sup> + 2(x)(3) + 3<sup>2</sup> = <strong>(x + 3)<sup>2</sup></strong>.",
        difficulty: "easy", category: "topic"
      },
      {
        id: "d13q3", question: "Factor: x<sup>3</sup> + 8.",
        type: "multiple-choice",
        options: ["(x + 2)(x<sup>2</sup> &minus; 2x + 4)","(x + 2)(x<sup>2</sup> + 2x + 4)","(x &minus; 2)(x<sup>2</sup> + 2x + 4)","(x + 2)(x<sup>2</sup> &minus; 4)"],
        correct: 0,
        explanation: "Sum of cubes: x<sup>3</sup> + 2<sup>3</sup>. Using SOAP: <strong>(x + 2)(x<sup>2</sup> &minus; 2x + 4)</strong>.",
        difficulty: "easy", category: "topic"
      },
      {
        id: "d13q4", question: "Factor: 4x<sup>2</sup> &minus; 12x + 9.",
        type: "multiple-choice",
        options: ["(2x &minus; 3)<sup>2</sup>","(2x + 3)<sup>2</sup>","(4x &minus; 3)(x &minus; 3)","(2x &minus; 9)(2x &minus; 1)"],
        correct: 0,
        explanation: "Check: (2x)<sup>2</sup> = 4x<sup>2</sup>, (3)<sup>2</sup> = 9, 2(2x)(3) = 12x. Middle is negative, so <strong>(2x &minus; 3)<sup>2</sup></strong>.",
        hints: ["This is a perfect square trinomial — check whether the first and last terms are perfect squares.", "Find the square roots of 4x<sup>2</sup> and 9, then verify the middle term matches the pattern 2ab."],
        difficulty: "medium", category: "topic"
      },
      {
        id: "d13q5", question: "Factor: 27a<sup>3</sup> &minus; 64.",
        type: "multiple-choice",
        options: ["(3a &minus; 4)(9a<sup>2</sup> + 12a + 16)","(3a + 4)(9a<sup>2</sup> &minus; 12a + 16)","(3a &minus; 4)(9a<sup>2</sup> &minus; 12a + 16)","(27a &minus; 64)(a<sup>2</sup> + 1)"],
        correct: 0,
        explanation: "Difference of cubes: (3a)<sup>3</sup> &minus; (4)<sup>3</sup>. SOAP gives <strong>(3a &minus; 4)(9a<sup>2</sup> + 12a + 16)</strong>.",
        hints: ["This is a difference of cubes — rewrite each term as something cubed.", "Identify the cube roots: what cubed gives 27a<sup>3</sup>? What cubed gives 64? Then apply the SOAP pattern."],
        difficulty: "medium", category: "topic"
      },
      {
        id: "d13q6", question: "Factor completely: 3x<sup>2</sup> &minus; 75.",
        type: "multiple-choice",
        options: ["3(x + 5)(x &minus; 5)","(3x + 15)(x &minus; 5)","3(x<sup>2</sup> &minus; 25)","(x + 5)(3x &minus; 15)"],
        correct: 0,
        explanation: "GCF = 3: 3(x<sup>2</sup> &minus; 25). Then difference of squares: <strong>3(x + 5)(x &minus; 5)</strong>.",
        hints: ["Always start by looking for a greatest common factor before checking for special patterns.", "After pulling out the GCF, look at what remains — does it fit the difference of squares pattern?"],
        difficulty: "medium", category: "topic"
      },
      {
        id: "d13q7", question: "Factor completely: x<sup>4</sup> &minus; 81.",
        type: "multiple-choice",
        options: ["(x<sup>2</sup> + 9)(x + 3)(x &minus; 3)","(x<sup>2</sup> + 9)(x<sup>2</sup> &minus; 9)","(x + 3)<sup>2</sup>(x &minus; 3)<sup>2</sup>","(x<sup>2</sup> &minus; 9)<sup>2</sup>"],
        correct: 0,
        explanation: "Difference of squares: (x<sup>2</sup>)<sup>2</sup> &minus; (9)<sup>2</sup> = (x<sup>2</sup> + 9)(x<sup>2</sup> &minus; 9). Factor x<sup>2</sup> &minus; 9 again: <strong>(x<sup>2</sup> + 9)(x + 3)(x &minus; 3)</strong>.",
        hints: ["Rewrite x<sup>4</sup> as (x<sup>2</sup>)<sup>2</sup> and 81 as 9<sup>2</sup> — now you have a difference of squares.", "After the first factoring, check each factor to see if it can be factored further."],
        difficulty: "hard", category: "topic"
      },
      {
        id: "d13q8", question: "Factor completely: 2x<sup>3</sup> + 54.",
        type: "multiple-choice",
        options: ["2(x + 3)(x<sup>2</sup> &minus; 3x + 9)","2(x<sup>3</sup> + 27)","(2x + 6)(x<sup>2</sup> &minus; 3x + 9)","2(x &minus; 3)(x<sup>2</sup> + 3x + 9)"],
        correct: 0,
        explanation: "GCF = 2: 2(x<sup>3</sup> + 27). Sum of cubes: x<sup>3</sup> + 3<sup>3</sup> = (x + 3)(x<sup>2</sup> &minus; 3x + 9). Final: <strong>2(x + 3)(x<sup>2</sup> &minus; 3x + 9)</strong>.",
        hints: ["Start by factoring out the GCF — once you do, the remaining expression should look like a familiar cube pattern.", "After removing the GCF, recognize the sum of cubes and recall the SOAP mnemonic for the signs."],
        difficulty: "hard", category: "topic"
      },
      {
        id: "d13q9", question: "Factor: 6x<sup>2</sup> + x &minus; 12. (Review: Day 12)",
        type: "multiple-choice",
        options: ["(3x &minus; 4)(2x + 3)","(6x &minus; 4)(x + 3)","(3x + 4)(2x &minus; 3)","(2x &minus; 4)(3x + 3)"],
        correct: 0,
        explanation: "AC method: a &times; c = &minus;72. Find factors of &minus;72 that add to 1: 9 and &minus;8. Rewrite and group: 6x<sup>2</sup> + 9x &minus; 8x &minus; 12 = 3x(2x + 3) &minus; 4(2x + 3) = <strong>(3x &minus; 4)(2x + 3)</strong>.",
        hints: ["Use the AC method: multiply the leading coefficient by the constant and find two numbers that multiply to that product and add to the middle coefficient.", "Compute a &times; c = 6 &times; (&minus;12). What two factors of that result add up to 1?"],
        difficulty: "medium", category: "review"
      },
      {
        id: "d13q10", question: "Factor out the GCF: 18x<sup>3</sup> + 12x<sup>2</sup> &minus; 6x. (Review: Day 11)",
        type: "multiple-choice",
        options: ["6x(3x<sup>2</sup> + 2x &minus; 1)","6(3x<sup>3</sup> + 2x<sup>2</sup> &minus; x)","3x(6x<sup>2</sup> + 4x &minus; 2)","2x(9x<sup>2</sup> + 6x &minus; 3)"],
        correct: 0,
        explanation: "GCF of 18, 12, 6 is 6. Lowest x power is x<sup>1</sup>. GCF = 6x. Factor: <strong>6x(3x<sup>2</sup> + 2x &minus; 1)</strong>.",
        hints: ["The GCF includes both a numeric part and a variable part — find the largest number that divides all three coefficients and the lowest power of x.", "What is the GCF of 18, 12, and 6? And what is the smallest exponent on x across all three terms?"],
        difficulty: "medium", category: "review"
      }
    ]
  },
  day14: {
    lesson: {
      title: "Quadratic Equations (Factoring)",
      subtitle: "Set it to zero, factor, and solve — turn your factoring skills into an equation-solving superpower.",
      sections: [
        {
          heading: "What Is a Quadratic Equation?",
          paragraphs: [
            "A <strong>quadratic equation</strong> is any equation that can be written in <strong>standard form</strong>: ax<sup>2</sup> + bx + c = 0, where a &ne; 0. The word &ldquo;quadratic&rdquo; comes from the Latin word for &ldquo;square,&rdquo; because the highest power of the variable is 2. You've already worked with quadratic <em>expressions</em> when factoring — now we're going to <em>solve</em> them.",
            "Think of a quadratic equation like a riddle: &ldquo;What value(s) of x make this expression equal zero?&rdquo; A quadratic can have <strong>two solutions</strong>, <strong>one solution</strong>, or <strong>no real solutions</strong>. When we solve by factoring, we'll find the solutions that are rational numbers.",
            "Before solving, always rearrange the equation so one side is <strong>zero</strong>. For example, if you see x<sup>2</sup> + 5x = 14, rewrite it as x<sup>2</sup> + 5x &minus; 14 = 0. The standard form is your starting line — everything begins there."
          ]
        },
        {
          heading: "The Zero Product Property",
          paragraphs: [
            "The <strong>Zero Product Property</strong> is the key that makes solving by factoring work. It says: if the product of two factors is zero, then at least one of the factors <em>must</em> be zero. In math: if ab = 0, then a = 0 or b = 0 (or both).",
            "This makes perfect sense if you think about it: the only way to multiply two numbers and get zero is if at least one of them <em>is</em> zero. No other number has that special property — 3 &times; 0 = 0, but 3 &times; 2 = 6, not 0.",
            "So our strategy is clear: (1) Get the equation in standard form (= 0). (2) Factor the quadratic expression. (3) Set each factor equal to zero. (4) Solve each resulting equation. These individual solutions are called the <strong>roots</strong> or <strong>zeros</strong> of the equation."
          ],
          example: {
            title: "Worked Example: Zero Product Property",
            problem: "Solve: x<sup>2</sup> &minus; 5x &minus; 14 = 0.",
            steps: [
              "Factor the trinomial: find two numbers that multiply to &minus;14 and add to &minus;5. Those are &minus;7 and 2.",
              "Write the factored form: (x &minus; 7)(x + 2) = 0.",
              "Set each factor equal to zero: x &minus; 7 = 0 or x + 2 = 0.",
              "Solve: x = 7 or x = &minus;2.",
              "Check x = 7: (7)<sup>2</sup> &minus; 5(7) &minus; 14 = 49 &minus; 35 &minus; 14 = 0. ✓",
               "Solutions: <strong>x = 7 or x = &minus;2</strong>."
             ]
           },
           practice: [
             {
               type: "type-answer",
               prompt: "Solve x&sup2; + 3x &minus; 10 = 0. Write both solutions separated by a comma (smaller first).",
               answer: "-5, 2",
               accept: ["-5, 2", "-5,2", "x=-5, x=2", "-5 and 2", "x = -5, x = 2"],
               explanation: "Factor: (x + 5)(x &minus; 2) = 0. So x = &minus;5 or x = 2."
             },
             {
               type: "type-answer",
               prompt: "Solve x&sup2; &minus; 9 = 0. Write both solutions separated by a comma (smaller first).",
               answer: "-3, 3",
               accept: ["-3, 3", "-3,3", "x=-3, x=3", "-3 and 3"],
               explanation: "Factor as difference of squares: (x + 3)(x &minus; 3) = 0. So x = &minus;3 or x = 3."
             },
             {
               type: "multiple-quick",
               prompt: "If (x &minus; 4)(x + 1) = 0, what are the solutions?",
               options: ["x = 4 or x = &minus;1", "x = &minus;4 or x = 1", "x = 4 or x = 1"],
               correct: 0,
               explanation: "By the Zero Product Property, x &minus; 4 = 0 gives x = 4, and x + 1 = 0 gives x = &minus;1."
             }
           ]
         },
         {
           heading: "Solving Quadratics That Need Rearranging",
          paragraphs: [
            "Not every quadratic equation arrives in standard form. Sometimes you need to move terms around, factor out a GCF, or recognize a special pattern before you can apply the zero product property. The general approach is always the same: get everything on one side, simplify, then factor.",
            "Watch out for equations like 3x<sup>2</sup> = 12x. Don't divide both sides by x — you'd lose the solution x = 0! Instead, move everything to one side: 3x<sup>2</sup> &minus; 12x = 0, then factor: 3x(x &minus; 4) = 0, giving x = 0 or x = 4.",
            "Also watch for difference-of-squares equations like x<sup>2</sup> = 36. Rewrite as x<sup>2</sup> &minus; 36 = 0, then factor: (x + 6)(x &minus; 6) = 0, so x = &minus;6 or x = 6. Always bring everything to one side first!"
          ],
          example: {
            title: "Worked Example: GCF First, Then Solve",
            problem: "Solve: 2x<sup>2</sup> + 10x = 0.",
            steps: [
              "The equation is already set equal to 0. Factor out the GCF: 2x(x + 5) = 0.",
              "Set each factor equal to zero: 2x = 0 or x + 5 = 0.",
              "Solve: x = 0 or x = &minus;5.",
              "Solutions: <strong>x = 0 or x = &minus;5</strong>."
            ]
          }
        },
        {
          heading: "Word Problems with Quadratics",
          paragraphs: [
            "Quadratic equations pop up naturally in many real-world situations. Two common types are <strong>area problems</strong> and <strong>consecutive integer problems</strong>. For area problems, remember that Area = length &times; width, and if the dimensions involve variables, you'll often get a quadratic equation.",
            "For example: &ldquo;A rectangular garden is 3 meters longer than it is wide. Its area is 54 m<sup>2</sup>. Find the dimensions.&rdquo; If the width is w, then the length is w + 3, so w(w + 3) = 54, which gives w<sup>2</sup> + 3w &minus; 54 = 0. Factor: (w + 9)(w &minus; 6) = 0, so w = 6 (we reject w = &minus;9 since width can't be negative). The garden is 6 m by 9 m.",
            "For consecutive integer problems: if two consecutive integers have a product of 72, call them n and n + 1, so n(n + 1) = 72, giving n<sup>2</sup> + n &minus; 72 = 0. Always check your answers against the original problem — quadratic equations can give extraneous solutions that don't make sense in context."
          ]
        }
      ]
    },
    quiz: [
      {
        id: "d14q1", question: "Solve: (x &minus; 3)(x + 8) = 0.",
        type: "multiple-choice",
        options: ["x = 3 or x = &minus;8","x = &minus;3 or x = 8","x = 3 or x = 8","x = &minus;3 or x = &minus;8"],
        correct: 0,
        explanation: "Zero product property: x &minus; 3 = 0 &rArr; x = 3, or x + 8 = 0 &rArr; x = &minus;8. Solutions: <strong>x = 3 or x = &minus;8</strong>.",
        difficulty: "easy", category: "topic"
      },
      {
        id: "d14q2", question: "Solve: x<sup>2</sup> &minus; 9 = 0.",
        type: "multiple-choice",
        options: ["x = 3 or x = &minus;3","x = 9 or x = &minus;9","x = 3","x = 81"],
        correct: 0,
        explanation: "Difference of squares: (x + 3)(x &minus; 3) = 0. So x = 3 or x = &minus;3.",
        difficulty: "easy", category: "topic"
      },
      {
        id: "d14q3", question: "Solve: x<sup>2</sup> + 7x + 10 = 0.",
        type: "multiple-choice",
        options: ["x = &minus;2 or x = &minus;5","x = 2 or x = 5","x = &minus;2 or x = 5","x = 2 or x = &minus;5"],
        correct: 0,
        explanation: "Factor: (x + 2)(x + 5) = 0. So x = &minus;2 or x = &minus;5.",
        difficulty: "easy", category: "topic"
      },
      {
        id: "d14q4", question: "Solve: x<sup>2</sup> &minus; x = 12.",
        type: "multiple-choice",
        options: ["x = 4 or x = &minus;3","x = &minus;4 or x = 3","x = 12 or x = 1","x = 6 or x = &minus;2"],
        correct: 0,
        explanation: "Rewrite: x<sup>2</sup> &minus; x &minus; 12 = 0. Factor: (x &minus; 4)(x + 3) = 0. So x = 4 or x = &minus;3.",
        hints: ["Before factoring, you need to rearrange so one side equals zero.", "Move 12 to the left side to get standard form, then find two numbers that multiply to &minus;12 and add to &minus;1."],
        difficulty: "medium", category: "topic"
      },
      {
        id: "d14q5", question: "Solve: 3x<sup>2</sup> &minus; 12x = 0.",
        type: "multiple-choice",
        options: ["x = 0 or x = 4","x = 4","x = 0 or x = &minus;4","x = &minus;4"],
        correct: 0,
        explanation: "Factor: 3x(x &minus; 4) = 0. So 3x = 0 &rArr; x = 0, or x &minus; 4 = 0 &rArr; x = 4.",
        hints: ["Don't divide both sides by x — you'd lose a solution! Factor out the GCF instead.", "Factor out the common factor of 3x, then use the zero product property on each factor."],
        difficulty: "medium", category: "topic"
      },
      {
        id: "d14q6", question: "Solve: 2x<sup>2</sup> + 5x &minus; 3 = 0.",
        type: "multiple-choice",
        options: ["x = &frac12; or x = &minus;3","x = &minus;&frac12; or x = 3","x = 3 or x = &minus;&frac12;","x = 1 or x = &minus;3"],
        correct: 0,
        explanation: "Factor: (2x &minus; 1)(x + 3) = 0. So 2x &minus; 1 = 0 &rArr; x = &frac12;, or x + 3 = 0 &rArr; x = &minus;3.",
        hints: ["The leading coefficient is not 1, so you'll need the AC method or trial-and-error to factor.", "Multiply a &times; c = 2 &times; (&minus;3) = &minus;6. Find two numbers that multiply to &minus;6 and add to 5."],
        difficulty: "medium", category: "topic"
      },
      {
        id: "d14q7", question: "A rectangle's length is 5 more than its width. Its area is 84. What are the dimensions?",
        type: "multiple-choice",
        options: ["7 by 12","6 by 14","4 by 21","8 by 10"],
        correct: 0,
        explanation: "Let width = w. Then w(w + 5) = 84 &rArr; w<sup>2</sup> + 5w &minus; 84 = 0. Factor: (w + 12)(w &minus; 7) = 0. w = 7 (reject &minus;12). Dimensions: <strong>7 by 12</strong>.",
        hints: ["Let the width be w, then express the length in terms of w. Use the area formula to set up a quadratic equation.", "Write the equation w(w + 5) = 84 and rearrange to standard form before factoring."],
        difficulty: "hard", category: "topic"
      },
      {
        id: "d14q8", question: "Solve: (x + 1)(x &minus; 3) = 5.",
        type: "multiple-choice",
        options: ["x = 4 or x = &minus;2","x = 5 or x = &minus;1","x = 3 or x = &minus;1","x = &minus;4 or x = 2"],
        correct: 0,
        explanation: "Expand: x<sup>2</sup> &minus; 2x &minus; 3 = 5. Rearrange: x<sup>2</sup> &minus; 2x &minus; 8 = 0. Factor: (x &minus; 4)(x + 2) = 0. So <strong>x = 4 or x = &minus;2</strong>.",
        hints: ["You can't set each factor equal to 5 — the zero product property only works when the product equals zero.", "First expand the left side, then move the 5 over to get everything equal to zero before factoring."],
        difficulty: "hard", category: "topic"
      },
      {
        id: "d14q9", question: "Factor completely: x<sup>3</sup> &minus; 64. (Review: Day 13)",
        type: "multiple-choice",
        options: ["(x &minus; 4)(x<sup>2</sup> + 4x + 16)","(x + 4)(x<sup>2</sup> &minus; 4x + 16)","(x &minus; 4)(x<sup>2</sup> &minus; 4x + 16)","(x &minus; 8)(x<sup>2</sup> + 8)"],
        correct: 0,
        explanation: "Difference of cubes: x<sup>3</sup> &minus; 4<sup>3</sup>. SOAP: <strong>(x &minus; 4)(x<sup>2</sup> + 4x + 16)</strong>.",
        hints: ["Recognize this as a difference of cubes — what number cubed equals 64?", "Use SOAP (Same, Opposite, Always Positive) to determine the signs in each factor."],
        difficulty: "medium", category: "review"
      },
      {
        id: "d14q10", question: "Factor: 2x<sup>2</sup> + 7x + 3. (Review: Day 12)",
        type: "multiple-choice",
        options: ["(2x + 1)(x + 3)","(2x + 3)(x + 1)","(x + 1)(2x + 3)","(2x &minus; 1)(x &minus; 3)"],
        correct: 0,
        explanation: "AC method: 2 &times; 3 = 6. Factors of 6 that add to 7: 6 and 1. Rewrite: 2x<sup>2</sup> + 6x + x + 3. Group: 2x(x + 3) + 1(x + 3) = <strong>(2x + 1)(x + 3)</strong>.",
        hints: ["Use the AC method: multiply the leading coefficient by the constant term.", "Compute 2 &times; 3 = 6. Find two numbers that multiply to 6 and add to 7, then split the middle term."],
        difficulty: "medium", category: "review"
      }
    ]
  },
  day15: {
    lesson: {
      title: "Completing the Square",
      subtitle: "Reshape any quadratic into a perfect square — unlock vertex form and a new solving technique.",
      sections: [
        {
          heading: "Why Complete the Square?",
          paragraphs: [
            "So far you&rsquo;ve solved quadratics by factoring. <strong>Completing the square</strong> is a powerful new method that works even when factoring doesn&rsquo;t. It&rsquo;s also the technique used to <em>derive</em> the quadratic formula (which you&rsquo;ll meet in the next lesson). More importantly, it lets you rewrite any quadratic expression ax<sup>2</sup> + bx + c in the form a(x &minus; h)<sup>2</sup> + k, which reveals the vertex of the parabola at a glance.",
            "Think of it this way: factoring tells you where a parabola crosses the x-axis, but completing the square tells you where the parabola&rsquo;s <strong>turning point</strong> is &mdash; its highest or lowest value. That&rsquo;s incredibly useful in optimization problems (&ldquo;What is the maximum profit?&rdquo;) and in graphing.",
            "The core idea is simple: we want to turn an expression like x<sup>2</sup> + bx into a <strong>perfect square trinomial</strong> (x + something)<sup>2</sup> by adding just the right constant. Let&rsquo;s see how."
          ],
          graphs: [{"type":"coordPlane","xMin":-2,"xMax":6,"yMin":-5,"yMax":8,"width":320,"height":300,"parabolas":[{"a":1,"b":-4,"c":3,"color":"#7c3aed","label":"y = x² − 4x + 3"}],"points":[{"x":2,"y":-1,"color":"#e53e3e","label":"vertex (2, −1)","labelPos":"br"},{"x":1,"y":0,"color":"#22c55e","label":"(1, 0)","labelPos":"tl"},{"x":3,"y":0,"color":"#22c55e","label":"(3, 0)","labelPos":"tr"}],"lines":[{"vertical":true,"x":2,"color":"#f59e0b","dashed":true}],"caption":"Factoring finds the x-intercepts; completing the square finds the vertex"}]
        },
        {
          heading: "The Method: Step by Step",
          paragraphs: [
            "Start with x<sup>2</sup> + bx. To make this a perfect square trinomial, take <strong>half of b</strong>, then <strong>square it</strong>, and <strong>add it</strong>. The result is x<sup>2</sup> + bx + (b/2)<sup>2</sup> = (x + b/2)<sup>2</sup>. That&rsquo;s the whole trick!",
            "For example, x<sup>2</sup> + 10x. Half of 10 is 5, and 5<sup>2</sup> = 25. So x<sup>2</sup> + 10x + 25 = (x + 5)<sup>2</sup>. But what if the expression is x<sup>2</sup> + 10x + 3? You can&rsquo;t just add 25 without compensating &mdash; you must <strong>add and subtract</strong> the same value to keep the expression equal: x<sup>2</sup> + 10x + 25 &minus; 25 + 3 = (x + 5)<sup>2</sup> &minus; 22.",
            "Here is the general procedure: given x<sup>2</sup> + bx + c, compute (b/2)<sup>2</sup>, then rewrite as (x + b/2)<sup>2</sup> + c &minus; (b/2)<sup>2</sup>. The expression is now in vertex form. If b is negative, everything still works &mdash; half of &minus;6 is &minus;3, and (&minus;3)<sup>2</sup> = 9."
          ],
          example: {
            title: "Worked Example: Basic Completing the Square",
            problem: "Rewrite x<sup>2</sup> + 8x + 5 in vertex form.",
            steps: [
              "Focus on the x<sup>2</sup> + 8x part. Half of 8 is 4, and 4<sup>2</sup> = 16.",
              "Add and subtract 16: x<sup>2</sup> + 8x + 16 &minus; 16 + 5.",
              "Group the perfect square: (x + 4)<sup>2</sup> &minus; 16 + 5.",
               "Simplify: <strong>(x + 4)<sup>2</sup> &minus; 11</strong>."
             ]
           },
           practice: [
             {
               type: "type-answer",
               prompt: "Complete the square: x&sup2; + 6x + ___. What number fills the blank?",
               answer: "9",
               accept: ["9"],
               explanation: "Half of 6 is 3, and 3&sup2; = 9. So x&sup2; + 6x + 9 = (x + 3)&sup2;."
             },
             {
               type: "type-answer",
               prompt: "Rewrite x&sup2; + 10x + 21 as (x + a)&sup2; + b. What is b?",
               answer: "-4",
               accept: ["-4", "−4"],
               explanation: "Half of 10 is 5, so (x + 5)&sup2; = x&sup2; + 10x + 25. Then x&sup2; + 10x + 21 = (x + 5)&sup2; &minus; 4. So b = &minus;4."
             },
             {
               type: "multiple-quick",
               prompt: "To complete the square for x&sup2; + bx, you add (b/2)&sup2;. For x&sup2; &minus; 12x, what do you add?",
               options: ["36", "144", "6"],
               correct: 0,
               explanation: "Half of &minus;12 is &minus;6, and (&minus;6)&sup2; = 36."
             }
           ]
         },
         {
           heading: "Completing the Square with Leading Coefficient &ne; 1",
          paragraphs: [
            "When the coefficient of x<sup>2</sup> is not 1, you must <strong>factor it out</strong> from the first two terms before completing the square. This is the step most students forget, so pay close attention.",
            "For an expression like 2x<sup>2</sup> + 12x + 7, first factor 2 from the x-terms: 2(x<sup>2</sup> + 6x) + 7. Now complete the square inside the parentheses: half of 6 is 3, and 3<sup>2</sup> = 9. Add and subtract 9 <em>inside</em> the parentheses: 2(x<sup>2</sup> + 6x + 9 &minus; 9) + 7 = 2((x + 3)<sup>2</sup> &minus; 9) + 7.",
            "Now distribute the 2: 2(x + 3)<sup>2</sup> &minus; 18 + 7 = 2(x + 3)<sup>2</sup> &minus; 11. Be very careful here &mdash; the &minus;9 inside the parentheses gets multiplied by the leading coefficient (2), so it becomes &minus;18, not &minus;9. This is the most common mistake!"
          ],
          example: {
            title: "Worked Example: Leading Coefficient &ne; 1",
            problem: "Rewrite 3x<sup>2</sup> &minus; 18x + 10 in vertex form.",
            steps: [
              "Factor 3 from the x-terms: 3(x<sup>2</sup> &minus; 6x) + 10.",
              "Half of &minus;6 is &minus;3, and (&minus;3)<sup>2</sup> = 9. Add and subtract 9 inside: 3(x<sup>2</sup> &minus; 6x + 9 &minus; 9) + 10.",
              "Rewrite: 3((x &minus; 3)<sup>2</sup> &minus; 9) + 10.",
              "Distribute: 3(x &minus; 3)<sup>2</sup> &minus; 27 + 10 = <strong>3(x &minus; 3)<sup>2</sup> &minus; 17</strong>."
            ]
          }
        },
        {
          heading: "Solving Equations by Completing the Square",
          paragraphs: [
            "Completing the square isn&rsquo;t just for rewriting expressions &mdash; it&rsquo;s a powerful equation-solving technique. The idea: turn the left side into a perfect square, then take the square root of both sides.",
            "Here&rsquo;s the strategy for solving ax<sup>2</sup> + bx + c = 0: (1) Move the constant to the other side: ax<sup>2</sup> + bx = &minus;c. (2) If a &ne; 1, divide everything by a. (3) Add (b/2)<sup>2</sup> to <em>both</em> sides to complete the square. (4) Write the left side as a perfect square. (5) Take the square root of both sides (don&rsquo;t forget &pm;!). (6) Solve for x.",
            "This method is especially useful when the quadratic doesn&rsquo;t factor nicely and you want exact answers in radical form. It&rsquo;s also the only way to derive the quadratic formula &mdash; try it by completing the square on ax<sup>2</sup> + bx + c = 0!"
          ],
          example: {
            title: "Worked Example: Solving by Completing the Square",
            problem: "Solve x<sup>2</sup> + 6x + 2 = 0.",
            steps: [
              "Move the constant: x<sup>2</sup> + 6x = &minus;2.",
              "Half of 6 is 3, and 3<sup>2</sup> = 9. Add 9 to both sides: x<sup>2</sup> + 6x + 9 = &minus;2 + 9.",
              "Write as a perfect square: (x + 3)<sup>2</sup> = 7.",
              "Take the square root: x + 3 = &pm;&radic;7.",
              "Solve: x = &minus;3 &pm; &radic;7. So <strong>x = &minus;3 + &radic;7 &approx; &minus;0.35</strong> or <strong>x = &minus;3 &minus; &radic;7 &approx; &minus;5.65</strong>."
            ]
          }
        },
        {
          heading: "Vertex Form of a Quadratic",
          paragraphs: [
            "When a quadratic is written as <strong>y = a(x &minus; h)<sup>2</sup> + k</strong>, we call this <strong>vertex form</strong>. The point (h, k) is the <strong>vertex</strong> of the parabola &mdash; the lowest point if a &gt; 0 (a minimum) or the highest point if a &lt; 0 (a maximum).",
            "Be careful with signs: in y = 2(x &minus; 3)<sup>2</sup> + 5, the vertex is (3, 5), <em>not</em> (&minus;3, 5). The formula has a minus sign built in: x &minus; h means h = 3. If you see y = (x + 4)<sup>2</sup> &minus; 1, rewrite the inside as (x &minus; (&minus;4)), so h = &minus;4 and the vertex is (&minus;4, &minus;1).",
            "The vertex form also tells you the <strong>axis of symmetry</strong>: the vertical line x = h that divides the parabola into two mirror-image halves. Every parabola is symmetric about this line. This makes graphing straightforward &mdash; plot the vertex, use the axis of symmetry, and pick a few points on one side."
          ],
          graphs: [{"type":"row","items":[{"type":"coordPlane","xMin":-2,"xMax":7,"yMin":-2,"yMax":12,"width":320,"height":300,"parabolas":[{"a":1,"b":0,"c":0,"color":"#0ea5e9","label":"y = x²","dashed":true},{"a":1,"b":-6,"c":11,"color":"#7c3aed","label":"y = (x−3)² + 2"}],"points":[{"x":3,"y":2,"color":"#7c3aed","label":"vertex (3, 2)","labelPos":"tr"}],"caption":"Shifting y = x² right 3, up 2"},{"type":"coordPlane","xMin":-6,"xMax":3,"yMin":-6,"yMax":6,"width":320,"height":300,"parabolas":[{"a":-1,"b":0,"c":0,"color":"#e53e3e","label":"y = −x²","dashed":true},{"a":-1,"b":-4,"c":0,"color":"#7c3aed","label":"y = −(x+2)² + 4"}],"points":[{"x":-2,"y":4,"color":"#7c3aed","label":"vertex (−2, 4)","labelPos":"tr"}],"caption":"Reflecting and shifting: vertex at (−2, 4)"}]}]
        }
      ]
    },
    quiz: [
      {
        id: "d15q1", question: "What value must you add to x<sup>2</sup> + 12x to make it a perfect square trinomial?",
        type: "multiple-choice",
        options: ["36","144","6","24"],
        correct: 0,
        explanation: "Take half of 12 (which is 6) and square it: 6<sup>2</sup> = <strong>36</strong>. Then x<sup>2</sup> + 12x + 36 = (x + 6)<sup>2</sup>.",
        difficulty: "easy", category: "topic"
      },
      {
        id: "d15q2", question: "Rewrite x<sup>2</sup> &minus; 4x as a perfect square minus a constant.",
        type: "multiple-choice",
        options: ["(x &minus; 2)<sup>2</sup> &minus; 4","(x &minus; 4)<sup>2</sup> &minus; 16","(x &minus; 2)<sup>2</sup> + 4","(x + 2)<sup>2</sup> &minus; 4"],
        correct: 0,
        explanation: "Half of &minus;4 is &minus;2, and (&minus;2)<sup>2</sup> = 4. So x<sup>2</sup> &minus; 4x + 4 &minus; 4 = <strong>(x &minus; 2)<sup>2</sup> &minus; 4</strong>.",
        difficulty: "easy", category: "topic"
      },
      {
        id: "d15q3", question: "Rewrite x<sup>2</sup> + 10x + 20 in vertex form.",
        type: "multiple-choice",
        options: ["(x + 5)<sup>2</sup> &minus; 5","(x + 5)<sup>2</sup> + 5","(x + 10)<sup>2</sup> &minus; 80","(x &minus; 5)<sup>2</sup> &minus; 5"],
        correct: 0,
        explanation: "Half of 10 is 5, 5<sup>2</sup> = 25. So x<sup>2</sup> + 10x + 25 &minus; 25 + 20 = <strong>(x + 5)<sup>2</sup> &minus; 5</strong>.",
        difficulty: "easy", category: "topic"
      },
      {
        id: "d15q4", question: "Solve by completing the square: x<sup>2</sup> &minus; 8x + 12 = 0.",
        type: "multiple-choice",
        options: ["x = 2 or x = 6","x = &minus;2 or x = &minus;6","x = 4 or x = &minus;4","x = 4 &pm; &radic;28"],
        correct: 0,
        explanation: "x<sup>2</sup> &minus; 8x = &minus;12. Add 16: (x &minus; 4)<sup>2</sup> = 4. Take square root: x &minus; 4 = &pm;2. So <strong>x = 6 or x = 2</strong>.",
        hints: ["Move the constant to the other side first, then complete the square on the left.", "Take half of the coefficient of x (which is &minus;8), square it, and add that value to both sides."],
        difficulty: "medium", category: "topic"
      },
      {
        id: "d15q5", question: "What is the vertex of y = (x &minus; 3)<sup>2</sup> + 7?",
        type: "multiple-choice",
        options: ["(3, 7)","(&minus;3, 7)","(3, &minus;7)","(&minus;3, &minus;7)"],
        correct: 0,
        explanation: "Vertex form y = a(x &minus; h)<sup>2</sup> + k gives vertex (h, k). Here h = 3 and k = 7, so the vertex is <strong>(3, 7)</strong>.",
        hints: ["Recall vertex form: y = a(x &minus; h)<sup>2</sup> + k, where the vertex is (h, k).", "Be careful with the sign — the formula has a minus sign built in, so (x &minus; 3) means h = 3, not &minus;3."],
        difficulty: "medium", category: "topic"
      },
      {
        id: "d15q6", question: "Rewrite y = x<sup>2</sup> &minus; 6x + 1 in vertex form.",
        type: "multiple-choice",
        options: ["y = (x &minus; 3)<sup>2</sup> &minus; 8","y = (x &minus; 3)<sup>2</sup> + 1","y = (x + 3)<sup>2</sup> &minus; 8","y = (x &minus; 6)<sup>2</sup> &minus; 35"],
        correct: 0,
        explanation: "Half of &minus;6 is &minus;3, (&minus;3)<sup>2</sup> = 9. So y = (x<sup>2</sup> &minus; 6x + 9) &minus; 9 + 1 = <strong>(x &minus; 3)<sup>2</sup> &minus; 8</strong>.",
        hints: ["To complete the square, focus on the x<sup>2</sup> &minus; 6x part and figure out what constant makes it a perfect square.", "Take half of &minus;6 and square it — add and subtract that value to keep the expression balanced."],
        difficulty: "medium", category: "topic"
      },
      {
        id: "d15q7", question: "Rewrite 2x<sup>2</sup> + 12x + 7 in vertex form.",
        type: "multiple-choice",
        options: ["2(x + 3)<sup>2</sup> &minus; 11","2(x + 3)<sup>2</sup> + 7","2(x + 6)<sup>2</sup> &minus; 65","(2x + 3)<sup>2</sup> &minus; 2"],
        correct: 0,
        explanation: "Factor 2: 2(x<sup>2</sup> + 6x) + 7. Half of 6 is 3, 3<sup>2</sup> = 9. Add/subtract inside: 2(x<sup>2</sup> + 6x + 9 &minus; 9) + 7 = 2(x + 3)<sup>2</sup> &minus; 18 + 7 = <strong>2(x + 3)<sup>2</sup> &minus; 11</strong>.",
        hints: ["When the leading coefficient isn't 1, you must factor it out from the x-terms first before completing the square.", "Factor 2 from the first two terms to get 2(x<sup>2</sup> + 6x) + 7, then complete the square inside the parentheses."],
        difficulty: "hard", category: "topic"
      },
      {
        id: "d15q8", question: "A ball is thrown upward. Its height is h = &minus;x<sup>2</sup> + 8x + 3, where x is the horizontal distance. What is the maximum height?",
        type: "type-answer",
        answer: "19",
        accept: ["19","19 units","19.0"],
        explanation: "Complete the square: h = &minus;(x<sup>2</sup> &minus; 8x) + 3 = &minus;(x<sup>2</sup> &minus; 8x + 16 &minus; 16) + 3 = &minus;(x &minus; 4)<sup>2</sup> + 16 + 3 = &minus;(x &minus; 4)<sup>2</sup> + 19. The vertex is (4, 19), so the maximum height is <strong>19</strong>.",
        hints: ["The maximum height occurs at the vertex of the parabola — complete the square to find vertex form.", "Factor out the negative sign first: h = &minus;(x<sup>2</sup> &minus; 8x) + 3, then complete the square inside the parentheses."],
        difficulty: "hard", category: "topic"
      },
      {
        id: "d15q9", question: "Solve by factoring: x<sup>2</sup> &minus; 7x + 10 = 0. (Review: Day 14)",
        type: "multiple-choice",
        options: ["x = 2 or x = 5","x = &minus;2 or x = &minus;5","x = 1 or x = 10","x = &minus;1 or x = &minus;10"],
        correct: 0,
        explanation: "Factor: (x &minus; 2)(x &minus; 5) = 0. So x = 2 or x = 5.",
        hints: ["Find two numbers that multiply to +10 and add to &minus;7.", "Both numbers must be negative (since their product is positive and sum is negative)."],
        difficulty: "medium", category: "review"
      },
      {
        id: "d15q10", question: "Factor completely: 4x<sup>2</sup> &minus; 25. (Review: Day 13)",
        type: "multiple-choice",
        options: ["(2x + 5)(2x &minus; 5)","(2x &minus; 5)<sup>2</sup>","(4x + 5)(x &minus; 5)","(4x + 25)(x &minus; 1)"],
        correct: 0,
        explanation: "Difference of squares: (2x)<sup>2</sup> &minus; (5)<sup>2</sup> = <strong>(2x + 5)(2x &minus; 5)</strong>.",
        hints: ["This is a two-term expression with subtraction — check if both terms are perfect squares.", "Rewrite 4x<sup>2</sup> as (2x)<sup>2</sup> and 25 as 5<sup>2</sup>, then apply the difference of squares pattern."],
        difficulty: "medium", category: "review"
      },
      {
        id: "d15q11", question: "Complete the square: rewrite x<sup>2</sup> &minus; 14x + 53 in vertex form.",
        type: "multiple-choice",
        options: ["(x &minus; 7)<sup>2</sup> + 4","(x &minus; 7)<sup>2</sup> &minus; 4","(x + 7)<sup>2</sup> + 4","(x &minus; 14)<sup>2</sup> + 53"],
        correct: 0,
        explanation: "Half of &minus;14 is &minus;7, and (&minus;7)<sup>2</sup> = 49. So x<sup>2</sup> &minus; 14x + 53 = (x<sup>2</sup> &minus; 14x + 49) + 53 &minus; 49 = <strong>(x &minus; 7)<sup>2</sup> + 4</strong>.",
        hints: ["Focus on the x<sup>2</sup> &minus; 14x part — what constant turns it into a perfect square trinomial?", "Take half of &minus;14 and square the result, then adjust the constant term to compensate."],
        difficulty: "medium", category: "topic"
      },
      {
        id: "d15q12", question: "Solve x<sup>2</sup> + 6x &minus; 1 = 0 by completing the square.",
        type: "multiple-choice",
        options: ["x = &minus;3 &pm; &radic;10","x = 3 &pm; &radic;10","x = &minus;3 &pm; &radic;8","x = &minus;6 &pm; &radic;10"],
        correct: 0,
        explanation: "x<sup>2</sup> + 6x = 1. Half of 6 is 3, 3<sup>2</sup> = 9. Add 9: (x + 3)<sup>2</sup> = 10. Take square root: x + 3 = &pm;&radic;10, so <strong>x = &minus;3 &pm; &radic;10</strong>.",
        hints: ["Move the constant to the right side first, then complete the square on the left — remember to add the same value to both sides.", "After adding (6/2)<sup>2</sup> = 9 to both sides, write the left side as a perfect square and take the square root (don't forget &pm;)."],
        difficulty: "hard", category: "topic"
      },
      {
        id: "d15q13", question: "Rewrite 2x<sup>2</sup> + 12x + 14 in vertex form and identify the vertex.",
        type: "multiple-choice",
        options: ["2(x + 3)<sup>2</sup> &minus; 4, vertex (&minus;3, &minus;4)","2(x + 3)<sup>2</sup> + 4, vertex (&minus;3, 4)","2(x &minus; 3)<sup>2</sup> &minus; 4, vertex (3, &minus;4)","(x + 3)<sup>2</sup> &minus; 4, vertex (&minus;3, &minus;4)"],
        correct: 0,
        explanation: "Factor out 2: 2(x<sup>2</sup> + 6x) + 14. Half of 6 is 3, 3<sup>2</sup> = 9. Add/subtract inside: 2(x<sup>2</sup> + 6x + 9 &minus; 9) + 14 = 2(x + 3)<sup>2</sup> &minus; 18 + 14 = <strong>2(x + 3)<sup>2</sup> &minus; 4</strong>. Vertex: <strong>(&minus;3, &minus;4)</strong>.",
        hints: ["Factor out the leading coefficient from the x-terms before completing the square inside.", "After completing the square inside the parentheses, be careful when distributing — the subtracted constant gets multiplied by the leading coefficient."],
        difficulty: "hard", category: "topic"
      },
      {
        id: "d15q14", question: "A ball is launched upward. Its height in feet after t seconds is h(t) = &minus;2t<sup>2</sup> + 12t + 5. What is the maximum height?",
        type: "multiple-choice",
        options: ["23 feet","18 feet","41 feet","5 feet"],
        correct: 0,
        explanation: "Factor out &minus;2: h(t) = &minus;2(t<sup>2</sup> &minus; 6t) + 5. Half of &minus;6 is &minus;3, (&minus;3)<sup>2</sup> = 9. Add/subtract: &minus;2(t &minus; 3)<sup>2</sup> + 18 + 5 = &minus;2(t &minus; 3)<sup>2</sup> + 23. Maximum height is <strong>23 feet</strong> at t = 3.",
        hints: ["The maximum height is the k-value in vertex form — complete the square to find it.", "Factor out &minus;2 from the t-terms first, then complete the square inside the parentheses."],
        difficulty: "medium", category: "topic",
        graph: {"type":"coordPlane","xMin":-1,"xMax":8,"yMin":-5,"yMax":28,"width":300,"height":280,"parabolas":[{"a":-2,"b":12,"c":5,"color":"#7c3aed","label":"h(t) = −2t² + 12t + 5"}],"points":[{"x":3,"y":23,"color":"#e53e3e","label":"vertex (3, 23)","labelPos":"tr"}]}
      }
    ]
  },
  day16: {
    lesson: {
      title: "The Quadratic Formula & Discriminant",
      subtitle: "The universal key — when factoring won't work, the quadratic formula always will.",
      sections: [
        {
          heading: "The Quadratic Formula",
          paragraphs: [
            "Some quadratic equations are difficult or impossible to factor with integers. That's where the <strong>quadratic formula</strong> comes in — it works for <em>every</em> quadratic equation. For ax<sup>2</sup> + bx + c = 0 (with a &ne; 0), the solutions are: x = (&minus;b &pm; &radic;(b<sup>2</sup> &minus; 4ac)) / (2a).",
            "Think of the quadratic formula as the &ldquo;master key&rdquo; for quadratics. While factoring is like picking a lock (elegant but sometimes impossible), the formula is like using the key — it always opens the door. The &ldquo;&pm;&rdquo; symbol means you compute two values: one with the plus and one with the minus.",
            "To use the formula, identify a, b, and c from the standard form ax<sup>2</sup> + bx + c = 0. Be very careful with signs! If the equation is 2x<sup>2</sup> &minus; 3x + 1 = 0, then a = 2, b = &minus;3, and c = 1. Note that b is &minus;3, <em>not</em> 3. Getting the signs right is the number-one source of errors with this formula."
          ],
          example: {
            title: "Worked Example: Quadratic Formula",
            problem: "Solve: 2x<sup>2</sup> &minus; 7x + 3 = 0.",
            steps: [
              "Identify: a = 2, b = &minus;7, c = 3.",
              "Compute the discriminant: b<sup>2</sup> &minus; 4ac = (&minus;7)<sup>2</sup> &minus; 4(2)(3) = 49 &minus; 24 = 25.",
              "Apply the formula: x = (&minus;(&minus;7) &pm; &radic;25) / (2 &times; 2) = (7 &pm; 5) / 4.",
              "Find both solutions: x = (7 + 5)/4 = 12/4 = 3, and x = (7 &minus; 5)/4 = 2/4 = &frac12;.",
               "Solutions: <strong>x = 3 or x = &frac12;</strong>."
             ]
           },
           practice: [
             {
               type: "type-answer",
               prompt: "Use the quadratic formula to solve x<sup>2</sup> &minus; 5x + 6 = 0. Write both solutions (smaller first).",
               answer: "2, 3",
               accept: ["2, 3", "2,3", "x=2, x=3", "2 and 3"],
               explanation: "a=1, b=&minus;5, c=6. Discriminant: 25 &minus; 24 = 1. x = (5 &plusmn; 1)/2. So x = 3 or x = 2."
             },
             {
               type: "type-answer",
               prompt: "For 2x<sup>2</sup> + 3x &minus; 5 = 0, compute the discriminant (b<sup>2</sup> &minus; 4ac).",
               answer: "49",
               accept: ["49"],
               explanation: "b<sup>2</sup> &minus; 4ac = 9 &minus; 4(2)(&minus;5) = 9 + 40 = 49."
             },
             {
               type: "multiple-quick",
               prompt: "If the discriminant is negative, the quadratic has:",
               options: ["No real solutions", "One real solution", "Two real solutions"],
               correct: 0,
               explanation: "A negative discriminant means the square root is imaginary, so there are no real solutions (only complex ones)."
             }
           ]
         },
         {
           heading: "The Discriminant: Predicting Solutions",
          paragraphs: [
            "The expression under the square root, <strong>b<sup>2</sup> &minus; 4ac</strong>, is called the <strong>discriminant</strong> (we often call it D or &Delta;). It tells you how many real solutions the equation has <em>without</em> actually solving it. Think of it as a weather forecast for your equation.",
            "Here are the three cases: (1) If b<sup>2</sup> &minus; 4ac &gt; 0, the equation has <strong>two distinct real solutions</strong>. (2) If b<sup>2</sup> &minus; 4ac = 0, the equation has <strong>exactly one real solution</strong> (a repeated root). (3) If b<sup>2</sup> &minus; 4ac &lt; 0, the equation has <strong>no real solutions</strong> (you'd need imaginary numbers, which you'll learn later).",
            "Why does this work? If the discriminant is positive, &radic;(positive) gives a real number, and adding or subtracting it creates two different answers. If it's zero, &radic;0 = 0, so the &pm; doesn't matter and both answers are the same. If it's negative, you can't take the square root of a negative number (in real numbers), so there are no real solutions."
          ],
          graphs: [{"type":"row","items":[{"type":"coordPlane","xMin":-5,"xMax":5,"yMin":-4,"yMax":8,"width":240,"height":240,"parabolas":[{"a":1,"b":0,"c":-3,"color":"#22c55e","label":"D > 0"}],"points":[{"x":-1.73,"y":0,"color":"#22c55e","label":""},{"x":1.73,"y":0,"color":"#22c55e","label":""}],"caption":"Two real solutions"},{"type":"coordPlane","xMin":-5,"xMax":5,"yMin":-4,"yMax":8,"width":240,"height":240,"parabolas":[{"a":1,"b":-4,"c":4,"color":"#0ea5e9","label":"D = 0"}],"points":[{"x":2,"y":0,"color":"#0ea5e9","label":""}],"caption":"One repeated solution"},{"type":"coordPlane","xMin":-5,"xMax":5,"yMin":-2,"yMax":10,"width":240,"height":240,"parabolas":[{"a":1,"b":0,"c":3,"color":"#e53e3e","label":"D < 0"}],"caption":"No real solutions"}]}],
          example: {
            title: "Worked Example: Using the Discriminant",
            problem: "How many real solutions does 3x<sup>2</sup> &minus; 4x + 5 = 0 have?",
            steps: [
              "Identify: a = 3, b = &minus;4, c = 5.",
              "Compute: b<sup>2</sup> &minus; 4ac = (&minus;4)<sup>2</sup> &minus; 4(3)(5) = 16 &minus; 60 = &minus;44.",
              "Since the discriminant is <strong>negative</strong> (&minus;44 &lt; 0), the equation has <strong>no real solutions</strong>."
            ]
          }
        },
        {
          heading: "Step-by-Step Through the Formula",
          paragraphs: [
            "Let's walk through the formula carefully to build confidence. The most common mistakes are (1) forgetting that &minus;b means you flip the sign of b, (2) not squaring b correctly when it's negative, and (3) putting only the first term (not the entire numerator) over 2a.",
            "Here's a reliable procedure: <strong>Step 1:</strong> Write the equation in standard form. <strong>Step 2:</strong> List a, b, and c (with correct signs). <strong>Step 3:</strong> Compute b<sup>2</sup>. <strong>Step 4:</strong> Compute 4ac. <strong>Step 5:</strong> Subtract to get the discriminant. <strong>Step 6:</strong> Take the square root. <strong>Step 7:</strong> Compute &minus;b + &radic;D and &minus;b &minus; &radic;D. <strong>Step 8:</strong> Divide each by 2a.",
            "Remember: the <em>entire</em> numerator (&minus;b &pm; &radic;D) is divided by 2a, not just the square root part. A fraction bar in the formula extends under the whole top. Write it out with parentheses if needed: (&minus;b + &radic;D) / (2a)."
          ],
          example: {
            title: "Worked Example: Full Walk-Through",
            problem: "Solve: x<sup>2</sup> + 6x + 2 = 0.",
            steps: [
              "Identify: a = 1, b = 6, c = 2.",
              "b<sup>2</sup> = 36. 4ac = 4(1)(2) = 8. Discriminant = 36 &minus; 8 = 28.",
              "&radic;28 = &radic;(4 &times; 7) = 2&radic;7.",
              "x = (&minus;6 &pm; 2&radic;7) / (2 &times; 1) = (&minus;6 &pm; 2&radic;7) / 2.",
              "Simplify by dividing numerator and denominator by 2: x = &minus;3 &pm; &radic;7.",
              "Solutions: <strong>x = &minus;3 + &radic;7 or x = &minus;3 &minus; &radic;7</strong> (approximately &minus;0.35 and &minus;5.65)."
            ],
            graphs: [{"type":"coordPlane","xMin":-8,"xMax":2,"yMin":-8,"yMax":6,"width":320,"height":320,"parabolas":[{"a":1,"b":6,"c":2,"color":"#7c3aed","label":"y = x² + 6x + 2"}],"points":[{"x":-0.354,"y":0,"color":"#e53e3e","label":"−3+√7","labelPos":"tr"},{"x":-5.646,"y":0,"color":"#e53e3e","label":"−3−√7","labelPos":"tl"}],"caption":"The parabola crosses the x-axis at x = −3 ± √7"}]
          }
        },
        {
          heading: "Choosing a Solving Method",
          paragraphs: [
            "You now have multiple tools for solving quadratics: factoring, the quadratic formula, and taking square roots (for equations like x<sup>2</sup> = k). How do you choose? If the equation factors easily, factoring is fastest. If you see a perfect square or difference of squares, use those patterns. If the coefficients are messy or you can't find factors, go straight to the quadratic formula.",
            "A quick test: compute the discriminant first. If it's a perfect square (like 0, 1, 4, 9, 16, 25, ...), the equation <em>can</em> be factored with rational numbers, and factoring might be quicker. If the discriminant is positive but not a perfect square, you'll get irrational solutions and should use the formula.",
            "In real life, the quadratic formula is used everywhere: physics (projectile motion), engineering (structural loads), finance (break-even analysis), and computer graphics (ray tracing). Being comfortable with this formula is like having a Swiss Army knife in your math toolbox — it may not always be the most elegant approach, but it always works."
          ]
        }
      ]
    },
    quiz: [
      {
        id: "d16q1", question: "Using the quadratic formula, what are the solutions to x<sup>2</sup> &minus; 5x + 6 = 0?",
        type: "multiple-choice",
        options: ["x = 2 or x = 3","x = &minus;2 or x = &minus;3","x = 1 or x = 6","x = &minus;1 or x = &minus;6"],
        correct: 0,
        explanation: "a = 1, b = &minus;5, c = 6. D = 25 &minus; 24 = 1. x = (5 &pm; 1)/2. So x = 3 or x = 2.",
        difficulty: "easy", category: "topic"
      },
      {
        id: "d16q2", question: "What is the discriminant of x<sup>2</sup> + 4x + 4 = 0?",
        type: "multiple-choice",
        options: ["0","32","16","&minus;16"],
        correct: 0,
        explanation: "b<sup>2</sup> &minus; 4ac = 16 &minus; 16 = <strong>0</strong>. This means exactly one repeated real solution.",
        difficulty: "easy", category: "topic",
        graph: {"type":"coordPlane","xMin":-6,"xMax":2,"yMin":-2,"yMax":8,"width":260,"height":240,"parabolas":[{"a":1,"b":4,"c":4,"color":"#0ea5e9","label":"y = x²+4x+4"}],"points":[{"x":-2,"y":0,"color":"#e53e3e","label":"(−2, 0)","labelPos":"br"}],"caption":"Parabola just touches the x-axis (D = 0)"}
      },
      {
        id: "d16q3", question: "If the discriminant is negative, how many real solutions does the quadratic have?",
        type: "multiple-choice",
        options: ["No real solutions","One real solution","Two real solutions","Infinitely many"],
        correct: 0,
        explanation: "A negative discriminant means the square root is not a real number, so there are <strong>no real solutions</strong>.",
        difficulty: "easy", category: "topic",
        graph: {"type":"coordPlane","xMin":-4,"xMax":4,"yMin":-2,"yMax":10,"width":260,"height":240,"parabolas":[{"a":1,"b":0,"c":3,"color":"#e53e3e","label":"D < 0"}],"caption":"Parabola does not cross the x-axis"}
      },
      {
        id: "d16q4", question: "Solve using the quadratic formula: x<sup>2</sup> + 2x &minus; 8 = 0.",
        type: "multiple-choice",
        options: ["x = 2 or x = &minus;4","x = &minus;2 or x = 4","x = 8 or x = &minus;1","x = 1 or x = &minus;8"],
        correct: 0,
        explanation: "a = 1, b = 2, c = &minus;8. D = 4 + 32 = 36. x = (&minus;2 &pm; 6)/2. So x = 4/2 = 2 or x = &minus;8/2 = &minus;4.",
        hints: ["Identify a, b, and c carefully — watch the sign on c.", "Start by computing the discriminant b<sup>2</sup> &minus; 4ac, then plug everything into the formula."],
        difficulty: "medium", category: "topic"
      },
      {
        id: "d16q5", question: "How many real solutions does 2x<sup>2</sup> + 3x + 5 = 0 have?",
        type: "multiple-choice",
        options: ["None (discriminant is negative)","One","Two","Cannot be determined"],
        correct: 0,
        explanation: "D = 9 &minus; 40 = &minus;31. Since &minus;31 &lt; 0, there are <strong>no real solutions</strong>.",
        hints: ["You don't need to solve — just compute the discriminant to determine the number of solutions.", "Calculate b<sup>2</sup> &minus; 4ac and check whether it's positive, zero, or negative."],
        difficulty: "medium", category: "topic",
        graph: {"type":"coordPlane","xMin":-4,"xMax":3,"yMin":-1,"yMax":14,"width":260,"height":240,"parabolas":[{"a":2,"b":3,"c":5,"color":"#7c3aed","label":"y = 2x²+3x+5"}],"caption":"Entirely above x-axis — no real solutions"}
      },
      {
        id: "d16q6", question: "Solve: 3x<sup>2</sup> &minus; 2x &minus; 1 = 0.",
        type: "multiple-choice",
        options: ["x = 1 or x = &minus;&#8531;","x = &minus;1 or x = &#8531;","x = 1 or x = &#8531;","x = &frac12; or x = &minus;1"],
        correct: 0,
        explanation: "a = 3, b = &minus;2, c = &minus;1. D = 4 + 12 = 16. x = (2 &pm; 4)/6. So x = 6/6 = 1 or x = &minus;2/6 = &minus;&#8531;.",
        hints: ["Be careful identifying a, b, and c — remember b = &minus;2, not 2.", "Compute the discriminant first. Since it's a perfect square, the solutions will be rational numbers."],
        difficulty: "medium", category: "topic"
      },
      {
        id: "d16q7", question: "Solve: x<sup>2</sup> &minus; 4x &minus; 1 = 0. Express your answer in simplified radical form.",
        type: "multiple-choice",
        options: ["x = 2 &pm; &radic;5","x = 4 &pm; &radic;5","x = 2 &pm; &radic;20","x = &minus;2 &pm; &radic;5"],
        correct: 0,
        explanation: "a = 1, b = &minus;4, c = &minus;1. D = 16 + 4 = 20. &radic;20 = 2&radic;5. x = (4 &pm; 2&radic;5)/2 = <strong>2 &pm; &radic;5</strong>.",
        hints: ["The discriminant won't be a perfect square — you'll need to simplify the radical in your final answer.", "After applying the formula, simplify &radic;20 by factoring out a perfect square, then reduce the fraction."],
        difficulty: "hard", category: "topic"
      },
      {
        id: "d16q8", question: "For what value of k does x<sup>2</sup> + kx + 9 = 0 have exactly one real solution?",
        type: "multiple-choice",
        options: ["k = 6 or k = &minus;6","k = 3 or k = &minus;3","k = 9","k = 18"],
        correct: 0,
        explanation: "One real solution means D = 0: k<sup>2</sup> &minus; 4(1)(9) = 0 &rArr; k<sup>2</sup> = 36 &rArr; <strong>k = 6 or k = &minus;6</strong>.",
        hints: ["Exactly one real solution means the discriminant equals zero.", "Set b<sup>2</sup> &minus; 4ac = 0 with b = k, a = 1, and c = 9, then solve for k."],
        difficulty: "hard", category: "topic"
      },
      {
        id: "d16q9", question: "Factor completely: 25x<sup>2</sup> &minus; 4. (Review: Day 13)",
        type: "multiple-choice",
        options: ["(5x + 2)(5x &minus; 2)","(5x &minus; 2)<sup>2</sup>","(25x + 4)(x &minus; 1)","(5x + 4)(5x &minus; 1)"],
        correct: 0,
        explanation: "Difference of squares: (5x)<sup>2</sup> &minus; (2)<sup>2</sup> = <strong>(5x + 2)(5x &minus; 2)</strong>.",
        hints: ["Two terms, subtraction — check for the difference of squares pattern.", "Identify the square root of each term: what squared gives 25x<sup>2</sup>? What squared gives 4?"],
        difficulty: "medium", category: "review"
      },
      {
        id: "d16q10", question: "Solve by factoring: x<sup>2</sup> + 3x &minus; 18 = 0. (Review: Day 14)",
        type: "multiple-choice",
        options: ["x = 3 or x = &minus;6","x = &minus;3 or x = 6","x = 9 or x = &minus;2","x = &minus;9 or x = 2"],
        correct: 0,
        explanation: "Factor: (x + 6)(x &minus; 3) = 0. So x = &minus;6 or x = 3. Solutions: <strong>x = 3 or x = &minus;6</strong>.",
        hints: ["Find two numbers that multiply to &minus;18 and add to 3.", "One number must be positive and the other negative (since their product is negative). Which pair adds to 3?"],
        difficulty: "medium", category: "review"
      }
    ]
  },
  day17: {
    lesson: {
      title: "Complex Numbers",
      subtitle: "Step beyond the real number line — discover a whole new dimension of numbers built on the square root of &minus;1.",
      sections: [
        {
          heading: "Beyond the Real Number Line",
          paragraphs: [
            "Until now, we&rsquo;ve said that &radic;(&minus;1) is &ldquo;not a real number.&rdquo; But mathematicians don&rsquo;t like dead ends &mdash; they asked, &ldquo;What if we <em>invented</em> a number whose square is &minus;1?&rdquo; That number is called <strong>i</strong>, the <strong>imaginary unit</strong>, defined by i<sup>2</sup> = &minus;1, or equivalently, i = &radic;(&minus;1).",
            "Don&rsquo;t let the word &ldquo;imaginary&rdquo; fool you &mdash; these numbers are just as useful and well-defined as negative numbers or fractions. When negative numbers were first introduced centuries ago, people called them &ldquo;fictitious&rdquo; too! Imaginary numbers solve real problems in physics, engineering, and signal processing.",
            "With the imaginary unit i, we can now give answers to equations that previously had &ldquo;no real solution.&rdquo; For example, x<sup>2</sup> + 1 = 0 gives x<sup>2</sup> = &minus;1, so x = &pm;i. The discriminant being negative no longer means &ldquo;no solution&rdquo; &mdash; it means the solutions are complex numbers."
          ]
        },
        {
          heading: "Imaginary Numbers",
          paragraphs: [
            "An <strong>imaginary number</strong> is any number of the form bi, where b is a real number. Examples: 3i, &minus;5i, &frac12;i. To simplify &radic;(&minus;n) where n &gt; 0, factor out the &minus;1: &radic;(&minus;n) = &radic;(&minus;1) &times; &radic;n = i&radic;n. For instance, &radic;(&minus;9) = i&radic;9 = 3i, and &radic;(&minus;20) = i&radic;20 = 2i&radic;5.",
            "The <strong>powers of i</strong> follow a repeating cycle of four: i<sup>1</sup> = i, i<sup>2</sup> = &minus;1, i<sup>3</sup> = i<sup>2</sup> &times; i = &minus;i, i<sup>4</sup> = i<sup>2</sup> &times; i<sup>2</sup> = (&minus;1)(&minus;1) = 1. Then the pattern repeats: i<sup>5</sup> = i, i<sup>6</sup> = &minus;1, i<sup>7</sup> = &minus;i, i<sup>8</sup> = 1, and so on.",
            "To find any power of i, divide the exponent by 4 and look at the <strong>remainder</strong>: remainder 0 &rArr; 1, remainder 1 &rArr; i, remainder 2 &rArr; &minus;1, remainder 3 &rArr; &minus;i. For example, i<sup>23</sup>: 23 &divide; 4 = 5 remainder 3, so i<sup>23</sup> = &minus;i."
          ]
        },
        {
          heading: "Complex Numbers: a + bi",
          paragraphs: [
            "A <strong>complex number</strong> combines a real part and an imaginary part: <strong>a + bi</strong>, where a and b are real numbers. The number a is called the <strong>real part</strong> and b is called the <strong>imaginary part</strong>. For example, in 3 + 7i, the real part is 3 and the imaginary part is 7.",
            "Every real number is secretly a complex number with b = 0 (for instance, 5 = 5 + 0i). Every imaginary number has a = 0 (for instance, 3i = 0 + 3i). So complex numbers include both real and imaginary numbers as special cases &mdash; they&rsquo;re the big umbrella.",
            "Complex numbers can be visualized on the <strong>complex plane</strong> (also called the Argand diagram): the horizontal axis represents the real part and the vertical axis represents the imaginary part. The number 3 + 2i is plotted at the point (3, 2). This gives us a geometric way to think about these numbers."
          ],
          graphs: [{"type":"coordPlane","xMin":-5,"xMax":5,"yMin":-5,"yMax":5,"width":320,"height":320,"points":[{"x":3,"y":2,"color":"#7c3aed","label":"3 + 2i","labelPos":"tr"},{"x":-2,"y":4,"color":"#0ea5e9","label":"−2 + 4i","labelPos":"tl"},{"x":0,"y":-3,"color":"#e53e3e","label":"−3i","labelPos":"bl"},{"x":4,"y":0,"color":"#22c55e","label":"4","labelPos":"br"}],"caption":"The complex plane: real axis (horizontal) and imaginary axis (vertical)"}]
        },
        {
          heading: "Arithmetic with Complex Numbers",
          paragraphs: [
            "Adding and subtracting complex numbers is like combining like terms: add the real parts together and the imaginary parts together. For example: (3 + 5i) + (2 &minus; 7i) = (3 + 2) + (5 &minus; 7)i = 5 &minus; 2i.",
            "Multiplying complex numbers uses FOIL (or distribution), with the key rule that <strong>i<sup>2</sup> = &minus;1</strong>. For example: (2 + 3i)(4 &minus; i) = 8 &minus; 2i + 12i &minus; 3i<sup>2</sup> = 8 + 10i &minus; 3(&minus;1) = 8 + 10i + 3 = 11 + 10i. Always replace i<sup>2</sup> with &minus;1 and simplify.",
            "Notice that multiplying two complex numbers always gives another complex number &mdash; the set of complex numbers is <strong>closed</strong> under addition, subtraction, and multiplication. This means you never accidentally leave the complex number system."
          ],
          example: {
            title: "Worked Example: Multiplying Complex Numbers",
            problem: "Compute (1 + 4i)(3 &minus; 2i).",
            steps: [
              "FOIL: (1)(3) + (1)(&minus;2i) + (4i)(3) + (4i)(&minus;2i).",
              "Multiply: 3 &minus; 2i + 12i &minus; 8i<sup>2</sup>.",
              "Replace i<sup>2</sup> with &minus;1: 3 &minus; 2i + 12i &minus; 8(&minus;1) = 3 &minus; 2i + 12i + 8.",
               "Combine like terms: (3 + 8) + (&minus;2 + 12)i = <strong>11 + 10i</strong>."
             ]
           },
           practice: [
             {
               type: "type-answer",
               prompt: "Simplify: (3 + 2i) + (5 &minus; 4i). Write the result as a + bi.",
               answer: "8-2i",
               accept: ["8-2i", "8 - 2i", "8 − 2i", "8−2i"],
               explanation: "Combine reals: 3 + 5 = 8. Combine imaginaries: 2i &minus; 4i = &minus;2i. Result: 8 &minus; 2i."
             },
             {
               type: "type-answer",
               prompt: "What is i<sup>2</sup>?",
               answer: "-1",
               accept: ["-1", "−1"],
               explanation: "By definition, i = &radic;(&minus;1), so i<sup>2</sup> = &minus;1."
             },
             {
               type: "multiple-quick",
               prompt: "What is (2 + 3i)(2 &minus; 3i)?",
               options: ["13", "4 &minus; 9i<sup>2</sup>", "&minus;5"],
               correct: 0,
               explanation: "This is a conjugate pair: (a + bi)(a &minus; bi) = a<sup>2</sup> + b<sup>2</sup> = 4 + 9 = 13."
             }
           ]
         },
         {
           heading: "Complex Conjugates & Division",
          paragraphs: [
            "The <strong>complex conjugate</strong> of a + bi is <strong>a &minus; bi</strong> &mdash; you flip the sign of the imaginary part. For example, the conjugate of 3 + 5i is 3 &minus; 5i, and the conjugate of &minus;2 &minus; i is &minus;2 + i. The conjugate is often written with a bar: if z = a + bi, then z&#x0304; = a &minus; bi.",
            "Here&rsquo;s the magic: when you multiply a complex number by its conjugate, the imaginary parts cancel out! (a + bi)(a &minus; bi) = a<sup>2</sup> &minus; (bi)<sup>2</sup> = a<sup>2</sup> &minus; b<sup>2</sup>i<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup>, which is always a <em>real</em> number. This is the key to dividing complex numbers.",
            "To divide complex numbers, <strong>multiply the numerator and denominator by the conjugate of the denominator</strong>. The <strong>modulus</strong> (or absolute value) of a + bi is |a + bi| = &radic;(a<sup>2</sup> + b<sup>2</sup>), which represents the distance from the origin to the point (a, b) on the complex plane."
          ],
          example: {
            title: "Worked Example: Dividing Complex Numbers",
            problem: "Simplify (5 + 3i) / (2 &minus; i).",
            steps: [
              "Multiply top and bottom by the conjugate of the denominator (2 + i): ((5 + 3i)(2 + i)) / ((2 &minus; i)(2 + i)).",
              "Denominator: (2 &minus; i)(2 + i) = 4 &minus; i<sup>2</sup> = 4 + 1 = 5.",
              "Numerator: (5 + 3i)(2 + i) = 10 + 5i + 6i + 3i<sup>2</sup> = 10 + 11i + 3(&minus;1) = 7 + 11i.",
              "Divide: (7 + 11i) / 5 = <strong>7/5 + (11/5)i</strong>."
            ]
          }
        }
      ]
    },
    quiz: [
      {
        id: "d17q1", question: "What is the value of i<sup>2</sup>?",
        type: "multiple-choice",
        options: ["&minus;1","1","i","&minus;i"],
        correct: 0,
        explanation: "By definition, <strong>i<sup>2</sup> = &minus;1</strong>. This is the fundamental property of the imaginary unit.",
        difficulty: "easy", category: "topic"
      },
      {
        id: "d17q2", question: "Simplify: &radic;(&minus;49).",
        type: "multiple-choice",
        options: ["7i","&minus;7i","49i","&minus;7"],
        correct: 0,
        explanation: "&radic;(&minus;49) = &radic;(&minus;1) &times; &radic;49 = i &times; 7 = <strong>7i</strong>.",
        difficulty: "easy", category: "topic"
      },
      {
        id: "d17q3", question: "What is i<sup>15</sup>?",
        type: "multiple-choice",
        options: ["&minus;i","i","&minus;1","1"],
        correct: 0,
        explanation: "15 &divide; 4 = 3 remainder 3. The cycle is: remainder 0 &rArr; 1, 1 &rArr; i, 2 &rArr; &minus;1, 3 &rArr; &minus;i. So i<sup>15</sup> = <strong>&minus;i</strong>.",
        difficulty: "easy", category: "topic"
      },
      {
        id: "d17q4", question: "Compute: (4 + 3i) + (2 &minus; 7i).",
        type: "multiple-choice",
        options: ["6 &minus; 4i","6 + 10i","2 + 4i","6 &minus; 10i"],
        correct: 0,
        explanation: "Add real parts: 4 + 2 = 6. Add imaginary parts: 3 + (&minus;7) = &minus;4. Result: <strong>6 &minus; 4i</strong>.",
        hints: ["Add complex numbers by combining like terms — real parts with real parts, imaginary parts with imaginary parts.", "Compute 4 + 2 for the real part, and 3i + (&minus;7i) for the imaginary part."],
        difficulty: "medium", category: "topic"
      },
      {
        id: "d17q5", question: "Compute: (3 + 2i)(1 &minus; 4i).",
        type: "multiple-choice",
        options: ["11 &minus; 10i","3 &minus; 8i","11 + 10i","&minus;5 &minus; 10i"],
        correct: 0,
        explanation: "FOIL: 3 &minus; 12i + 2i &minus; 8i<sup>2</sup> = 3 &minus; 10i &minus; 8(&minus;1) = 3 &minus; 10i + 8 = <strong>11 &minus; 10i</strong>.",
        hints: ["Use FOIL to multiply, just like with binomials — but remember to replace i<sup>2</sup> with &minus;1.", "After FOILing, combine the real terms and the imaginary terms separately."],
        difficulty: "medium", category: "topic"
      },
      {
        id: "d17q6", question: "What is the conjugate of &minus;4 + 6i?",
        type: "multiple-choice",
        options: ["&minus;4 &minus; 6i","4 &minus; 6i","4 + 6i","&minus;4 + 6i"],
        correct: 0,
        explanation: "The conjugate flips the sign of the imaginary part: the conjugate of &minus;4 + 6i is <strong>&minus;4 &minus; 6i</strong>.",
        hints: ["The conjugate only changes one thing about a complex number — which part gets its sign flipped?", "Keep the real part exactly the same and flip the sign of the imaginary part."],
        difficulty: "medium", category: "topic"
      },
      {
        id: "d17q7", question: "Simplify: (6 + 2i) / (1 + i).",
        type: "multiple-choice",
        options: ["4 &minus; 2i","4 + 2i","3 &minus; i","3 + i"],
        correct: 0,
        explanation: "Multiply by conjugate: ((6 + 2i)(1 &minus; i)) / ((1 + i)(1 &minus; i)). Denominator: 1 + 1 = 2. Numerator: 6 &minus; 6i + 2i &minus; 2i<sup>2</sup> = 6 &minus; 4i + 2 = 8 &minus; 4i. Result: (8 &minus; 4i)/2 = <strong>4 &minus; 2i</strong>.",
        hints: ["To divide complex numbers, multiply the numerator and denominator by the conjugate of the denominator.", "The conjugate of the denominator is 1 &minus; i — multiply both top and bottom by it."],
        difficulty: "hard", category: "topic"
      },
      {
        id: "d17q8", question: "Solve: x<sup>2</sup> + 4 = 0.",
        type: "multiple-choice",
        options: ["x = 2i or x = &minus;2i","x = 2 or x = &minus;2","x = 4i or x = &minus;4i","No solution"],
        correct: 0,
        explanation: "x<sup>2</sup> = &minus;4. Take the square root: x = &pm;&radic;(&minus;4) = &pm;2i. So <strong>x = 2i or x = &minus;2i</strong>.",
        hints: ["Isolate x<sup>2</sup> first — you'll get a negative number on the other side, which is where i comes in.", "Rewrite &radic;(&minus;4) as &radic;(&minus;1) &times; &radic;4, and remember that &radic;(&minus;1) = i."],
        difficulty: "hard", category: "topic"
      },
      {
        id: "d17q9", question: "Solve by completing the square: x<sup>2</sup> &minus; 10x + 21 = 0. (Review: Day 15)",
        type: "multiple-choice",
        options: ["x = 3 or x = 7","x = &minus;3 or x = &minus;7","x = 5 &pm; &radic;4","x = 5 &pm; &radic;46"],
        correct: 0,
        explanation: "x<sup>2</sup> &minus; 10x = &minus;21. Add 25: (x &minus; 5)<sup>2</sup> = 4. Take root: x &minus; 5 = &pm;2. So x = 7 or x = 3.",
        hints: ["Move the constant to the right side, then add (half of &minus;10)<sup>2</sup> to both sides.", "After completing the square, you'll have (x &minus; 5)<sup>2</sup> equal to a positive number — take the square root of both sides."],
        difficulty: "medium", category: "review"
      },
      {
        id: "d17q10", question: "Solve by factoring: x<sup>2</sup> + 2x &minus; 15 = 0. (Review: Day 14)",
        type: "multiple-choice",
        options: ["x = 3 or x = &minus;5","x = &minus;3 or x = 5","x = 15 or x = &minus;1","x = 5 or x = 3"],
        correct: 0,
        explanation: "Factor: (x + 5)(x &minus; 3) = 0. So x = &minus;5 or x = 3. Solutions: <strong>x = 3 or x = &minus;5</strong>.",
        hints: ["Find two numbers that multiply to &minus;15 and add to 2.", "Since the product is negative, one number is positive and one is negative. Which pair sums to 2?"],
        difficulty: "medium", category: "review"
      },
      {
        id: "d17q11", question: "Simplify: &radic;(&minus;50).",
        type: "multiple-choice",
        options: ["5i&radic;2","25i","5&radic;2","i&radic;25"],
        correct: 0,
        explanation: "&radic;(&minus;50) = i&radic;50. Since 50 = 25 &times; 2, we get &radic;50 = 5&radic;2. So &radic;(&minus;50) = <strong>5i&radic;2</strong>.",
        hints: ["First separate the negative sign: &radic;(&minus;50) = &radic;(&minus;1) &times; &radic;50 = i&radic;50.", "Now simplify &radic;50 by finding the largest perfect square factor of 50."],
        difficulty: "medium", category: "topic"
      },
      {
        id: "d17q12", question: "Multiply and simplify: (3 + 4i)(2 &minus; 5i).",
        type: "multiple-choice",
        options: ["26 &minus; 7i","6 &minus; 20i","26 + 7i","&minus;14 &minus; 7i"],
        correct: 0,
        explanation: "FOIL: 6 &minus; 15i + 8i &minus; 20i<sup>2</sup> = 6 &minus; 7i &minus; 20(&minus;1) = 6 &minus; 7i + 20 = <strong>26 &minus; 7i</strong>.",
        hints: ["FOIL the binomials, keeping track of all four products — the i<sup>2</sup> term becomes a real number.", "After FOILing, replace i<sup>2</sup> with &minus;1, then combine the real parts and the imaginary parts."],
        difficulty: "hard", category: "topic"
      },
      {
        id: "d17q13", question: "Find the modulus (absolute value) of the complex number 5 &minus; 12i.",
        type: "type-answer",
        answer: "13",
        accept: ["13","13.0"],
        explanation: "|a + bi| = &radic;(a<sup>2</sup> + b<sup>2</sup>). |5 &minus; 12i| = &radic;(25 + 144) = &radic;169 = <strong>13</strong>. (A 5&ndash;12&ndash;13 Pythagorean triple!)",
        hints: ["The modulus formula is |a + bi| = &radic;(a<sup>2</sup> + b<sup>2</sup>). Identify a and b from the complex number.", "Compute 5<sup>2</sup> + 12<sup>2</sup> under the radical — you may recognize a famous Pythagorean triple."],
        difficulty: "hard", category: "topic"
      },
      {
        id: "d17q14", question: "Solve: x<sup>2</sup> + 4x + 13 = 0.",
        type: "multiple-choice",
        options: ["x = &minus;2 &pm; 3i","x = 2 &pm; 3i","x = &minus;4 &pm; 3i","x = &minus;2 &pm; 9i"],
        correct: 0,
        explanation: "Quadratic formula: a = 1, b = 4, c = 13. D = 16 &minus; 52 = &minus;36. x = (&minus;4 &pm; &radic;(&minus;36)) / 2 = (&minus;4 &pm; 6i) / 2 = <strong>&minus;2 &pm; 3i</strong>.",
        hints: ["Use the quadratic formula — the discriminant will be negative, giving you complex solutions.", "Compute D = 16 &minus; 52. Then &radic; of a negative number introduces i — simplify &radic;(&minus;36) before dividing."],
        difficulty: "medium", category: "topic"
      }
    ]
  },
  day18: {
    lesson: {
      title: "Graphing Linear Equations",
      subtitle: "Bring equations to life — see the line behind the algebra and understand what slope really means.",
      sections: [
        {
          heading: "Slope: The Steepness of a Line",
          paragraphs: [
            "<strong>Slope</strong> measures how steep a line is and which direction it tilts. It's defined as &ldquo;rise over run&rdquo; — the vertical change divided by the horizontal change between any two points. The formula is: m = (y<sub>2</sub> &minus; y<sub>1</sub>) / (x<sub>2</sub> &minus; x<sub>1</sub>).",
            "Think of slope like a hiking trail. A positive slope means you're going uphill (left to right), a negative slope means you're going downhill, a zero slope is flat ground, and an undefined slope is like a cliff (a vertical line). The larger the absolute value of the slope, the steeper the line.",
            "Real-world slopes are everywhere: a road grade of 6% means the road rises 6 feet for every 100 feet horizontally (slope = 0.06). A wheelchair ramp with slope 1/12 rises 1 inch for every 12 inches of length. Speed is a slope: miles (rise) per hour (run). Slope is really just a <strong>rate of change</strong>."
          ],
          graphs: [{"type":"row","items":[{"type":"coordPlane","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"width":200,"height":200,"lines":[{"m":1,"b":0,"color":"#22c55e","label":"m > 0"}],"caption":"Positive slope"},{"type":"coordPlane","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"width":200,"height":200,"lines":[{"m":-1,"b":0,"color":"#e53e3e","label":"m < 0"}],"caption":"Negative slope"},{"type":"coordPlane","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"width":200,"height":200,"lines":[{"m":0,"b":1,"color":"#0ea5e9","label":"m = 0"}],"caption":"Zero slope"},{"type":"coordPlane","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"width":200,"height":200,"lines":[{"vertical":true,"x":1,"color":"#f59e0b","label":"undef"}],"caption":"Undefined slope"}]}],
          example: {
            title: "Worked Example: Finding Slope",
            problem: "Find the slope of the line through (2, 3) and (6, 11).",
            steps: [
              "Label the points: (x<sub>1</sub>, y<sub>1</sub>) = (2, 3) and (x<sub>2</sub>, y<sub>2</sub>) = (6, 11).",
              "Apply the formula: m = (11 &minus; 3) / (6 &minus; 2) = 8 / 4.",
              "Simplify: m = <strong>2</strong>.",
              "Interpretation: the line rises 2 units for every 1 unit it moves to the right."
            ],
              graphs: [{"type":"coordPlane","xMin":-1,"xMax":8,"yMin":-1,"yMax":13,"width":320,"height":320,"lines":[{"m":2,"b":-1,"color":"#0ea5e9","label":"m = 2"}],"points":[{"x":2,"y":3,"color":"#e53e3e","label":"(2, 3)","labelPos":"bl"},{"x":6,"y":11,"color":"#e53e3e","label":"(6, 11)","labelPos":"tl"}],"caption":"Rise = 8, Run = 4, Slope = 8/4 = 2"}]
           },
           practice: [
             {
               type: "type-answer",
               prompt: "Find the slope of the line through (1, 3) and (4, 9).",
               answer: "2",
               accept: ["2", "m=2", "m = 2"],
               explanation: "m = (9 &minus; 3)/(4 &minus; 1) = 6/3 = 2."
             },
             {
               type: "type-answer",
               prompt: "Find the slope of the line through (&minus;2, 5) and (4, &minus;1).",
               answer: "-1",
               accept: ["-1", "−1", "m=-1", "m = -1"],
               explanation: "m = (&minus;1 &minus; 5)/(4 &minus; (&minus;2)) = &minus;6/6 = &minus;1."
             },
             {
               type: "multiple-quick",
               prompt: "A horizontal line has a slope of:",
               options: ["0", "Undefined", "1"],
               correct: 0,
               explanation: "Horizontal lines have zero rise, so slope = rise/run = 0/run = 0."
             }
           ]
         },
         {
           heading: "Slope-Intercept Form: y = mx + b",
          paragraphs: [
            "The <strong>slope-intercept form</strong> of a linear equation is y = mx + b, where m is the slope and b is the <strong>y-intercept</strong> — the point where the line crosses the y-axis (at the coordinate (0, b)). This form is incredibly useful because you can read off the slope and y-intercept just by looking at the equation.",
            "For example, y = 3x &minus; 2 has slope 3 and y-intercept &minus;2 (the line crosses the y-axis at (0, &minus;2)). To graph it: plot the y-intercept (0, &minus;2), then use the slope (rise 3, run 1) to find another point: (1, 1). Draw a straight line through both points.",
            "If an equation isn't in slope-intercept form, solve for y. For instance, 4x + 2y = 10 becomes 2y = &minus;4x + 10, then y = &minus;2x + 5. Now you can see the slope is &minus;2 and the y-intercept is 5."
          ],
          example: {
            title: "Worked Example: Graphing from Slope-Intercept Form",
            problem: "Graph: y = &minus;&frac12;x + 4.",
            steps: [
              "Identify the y-intercept: b = 4. Plot the point (0, 4).",
              "Identify the slope: m = &minus;&frac12;. This means: down 1, right 2 (or up 1, left 2).",
              "From (0, 4), move down 1 and right 2 to reach (2, 3). Plot this point.",
              "Draw a straight line through (0, 4) and (2, 3). Extend it in both directions with arrows."
            ],
            graphs: [{"type":"coordPlane","xMin":-2,"xMax":10,"yMin":-2,"yMax":6,"width":340,"height":300,"lines":[{"m":-0.5,"b":4,"color":"#0ea5e9","label":"y = −½x + 4"}],"points":[{"x":0,"y":4,"color":"#e53e3e","label":"(0, 4)","labelPos":"tl"},{"x":2,"y":3,"color":"#e53e3e","label":"(2, 3)","labelPos":"tr"}],"caption":"Start at (0, 4), use slope −½ to plot (2, 3)"}]
          }
        },
        {
          heading: "Finding Intercepts",
          paragraphs: [
            "Every line (except horizontal and vertical ones) crosses both axes. The <strong>x-intercept</strong> is where the line crosses the x-axis (y = 0), and the <strong>y-intercept</strong> is where it crosses the y-axis (x = 0). Finding intercepts gives you two easy points for graphing.",
            "To find the x-intercept, set y = 0 and solve for x. To find the y-intercept, set x = 0 and solve for y. For example, in 3x + 2y = 12: setting y = 0 gives 3x = 12, so x = 4 (x-intercept at (4, 0)). Setting x = 0 gives 2y = 12, so y = 6 (y-intercept at (0, 6)).",
            "This &ldquo;intercept method&rdquo; works especially well when the equation is in standard form (Ax + By = C) and the numbers divide evenly. It's often the fastest way to sketch a line."
          ]
        },
        {
          heading: "Horizontal and Vertical Lines",
          paragraphs: [
            "<strong>Horizontal lines</strong> have the equation y = k (where k is a constant). Every point on the line has the same y-coordinate. The slope of a horizontal line is <strong>0</strong> because there is no rise — the line is completely flat. Examples: y = 3, y = &minus;5, y = 0 (which is the x-axis itself).",
            "<strong>Vertical lines</strong> have the equation x = k. Every point has the same x-coordinate. The slope of a vertical line is <strong>undefined</strong> because the run is zero, and you can't divide by zero. Examples: x = 4, x = &minus;2, x = 0 (which is the y-axis).",
            "A common mistake is mixing these up. Remember: &ldquo;<strong>H</strong>orizontal is <strong>y</strong> = &rdquo; (think: horizon is flat, y stays the same) and &ldquo;<strong>V</strong>ertical is <strong>x</strong> = &rdquo; (the line goes up and down, x stays the same). Vertical lines are the only lines that are <em>not</em> functions — they fail the vertical line test!"
          ],
          graphs: [{"type":"row","items":[{"type":"coordPlane","xMin":-5,"xMax":5,"yMin":-5,"yMax":5,"width":260,"height":260,"lines":[{"m":0,"b":2,"color":"#0ea5e9","label":"y = 2"}],"caption":"Horizontal line y = 2 (slope = 0)"},{"type":"coordPlane","xMin":-5,"xMax":5,"yMin":-5,"yMax":5,"width":260,"height":260,"lines":[{"vertical":true,"x":-3,"color":"#e53e3e","label":"x = −3"}],"caption":"Vertical line x = −3 (undefined slope)"}]}]
        }
      ]
    },
    quiz: [
      {
        id: "d18q1", question: "What is the slope of the line through (1, 2) and (4, 8)?",
        type: "multiple-choice",
        options: ["2","3","6","&frac12;"],
        correct: 0,
        explanation: "m = (8 &minus; 2) / (4 &minus; 1) = 6 / 3 = <strong>2</strong>.",
        difficulty: "easy", category: "topic",
        graph: {"type":"coordPlane","xMin":-1,"xMax":6,"yMin":-1,"yMax":10,"width":280,"height":280,"lines":[{"m":2,"b":0,"color":"#0ea5e9"}],"points":[{"x":1,"y":2,"color":"#e53e3e","label":"(1, 2)","labelPos":"bl"},{"x":4,"y":8,"color":"#e53e3e","label":"(4, 8)","labelPos":"tl"}]}
      },
      {
        id: "d18q2", question: "In y = &minus;3x + 7, what is the y-intercept?",
        type: "multiple-choice",
        options: ["7","&minus;3","3","&minus;7"],
        correct: 0,
        explanation: "In slope-intercept form y = mx + b, b is the y-intercept. Here b = <strong>7</strong>, so the line crosses the y-axis at (0, 7).",
        difficulty: "easy", category: "topic",
        graph: {"type":"coordPlane","xMin":-1,"xMax":5,"yMin":-3,"yMax":9,"width":280,"height":280,"lines":[{"m":-3,"b":7,"color":"#0ea5e9","label":"y = −3x + 7"}],"points":[{"x":0,"y":7,"color":"#e53e3e","label":"(0, 7)","labelPos":"tr"}]}
      },
      {
        id: "d18q3", question: "What is the slope of the horizontal line y = 5?",
        type: "multiple-choice",
        options: ["0","5","Undefined","1"],
        correct: 0,
        explanation: "Horizontal lines have slope <strong>0</strong> (no rise, only run).",
        difficulty: "easy", category: "topic",
        graph: {"type":"coordPlane","xMin":-5,"xMax":5,"yMin":-2,"yMax":7,"width":300,"height":220,"lines":[{"m":0,"b":5,"color":"#0ea5e9","label":"y = 5"}]}
      },
      {
        id: "d18q4", question: "Find the x-intercept of 2x + 3y = 12.",
        type: "multiple-choice",
        options: ["(6, 0)","(0, 4)","(4, 0)","(0, 6)"],
        correct: 0,
        explanation: "Set y = 0: 2x = 12, so x = 6. The x-intercept is <strong>(6, 0)</strong>.",
        hints: ["The x-intercept is where the line crosses the x-axis — what is y at that point?", "Set y = 0 in the equation and solve for x."],
        difficulty: "medium", category: "topic",
        graph: {"type":"coordPlane","xMin":-1,"xMax":8,"yMin":-1,"yMax":6,"width":280,"height":260,"lines":[{"m":-0.667,"b":4,"color":"#0ea5e9","label":"2x + 3y = 12"}],"points":[{"x":6,"y":0,"color":"#e53e3e","label":"(6, 0)","labelPos":"tr"},{"x":0,"y":4,"color":"#e53e3e","label":"(0, 4)","labelPos":"tl"}]}
      },
      {
        id: "d18q5", question: "Rewrite 6x &minus; 2y = 10 in slope-intercept form.",
        type: "multiple-choice",
        options: ["y = 3x &minus; 5","y = &minus;3x + 5","y = 3x + 5","y = &minus;3x &minus; 5"],
        correct: 0,
        explanation: "Solve for y: &minus;2y = &minus;6x + 10, so y = 3x &minus; 5. Slope is 3, y-intercept is &minus;5.",
        hints: ["Slope-intercept form is y = mx + b — isolate y on one side of the equation.", "Move the 6x term to the right, then divide everything by the coefficient of y."],
        difficulty: "medium", category: "topic",
        graph: {"type":"coordPlane","xMin":-2,"xMax":5,"yMin":-7,"yMax":5,"width":280,"height":280,"lines":[{"m":3,"b":-5,"color":"#0ea5e9","label":"y = 3x − 5"}],"points":[{"x":0,"y":-5,"color":"#e53e3e","label":"(0, −5)","labelPos":"tr"}]}
      },
      {
        id: "d18q6", question: "What is the slope of the line through (&minus;2, 5) and (3, &minus;5)?",
        type: "multiple-choice",
        options: ["&minus;2","2","&minus;&frac12;","&frac12;"],
        correct: 0,
        explanation: "m = (&minus;5 &minus; 5) / (3 &minus; (&minus;2)) = &minus;10 / 5 = <strong>&minus;2</strong>.",
        hints: ["Use the slope formula m = (y<sub>2</sub> &minus; y<sub>1</sub>) / (x<sub>2</sub> &minus; x<sub>1</sub>) — be careful subtracting negative numbers.", "Compute the rise: &minus;5 &minus; 5. Compute the run: 3 &minus; (&minus;2). Then divide."],
        difficulty: "medium", category: "topic",
        graph: {"type":"coordPlane","xMin":-4,"xMax":5,"yMin":-7,"yMax":7,"width":280,"height":280,"lines":[{"m":-2,"b":1,"color":"#0ea5e9"}],"points":[{"x":-2,"y":5,"color":"#e53e3e","label":"(−2, 5)","labelPos":"tr"},{"x":3,"y":-5,"color":"#e53e3e","label":"(3, −5)","labelPos":"br"}]}
      },
      {
        id: "d18q7", question: "A line passes through (0, &minus;1) with slope &frac23;. Which point is also on the line?",
        type: "multiple-choice",
        options: ["(3, 1)","(2, 1)","(3, &minus;3)","(&minus;3, 1)"],
        correct: 0,
        explanation: "From (0, &minus;1), rise 2 and run 3: (0 + 3, &minus;1 + 2) = <strong>(3, 1)</strong>.",
        hints: ["Slope = rise/run. From the given point, move right by the run and up by the rise to find another point.", "Starting at (0, &minus;1), move right 3 (the run) and up 2 (the rise) — where do you land?"],
        difficulty: "hard", category: "topic",
        graph: {"type":"coordPlane","xMin":-2,"xMax":7,"yMin":-3,"yMax":5,"width":300,"height":280,"lines":[{"m":0.667,"b":-1,"color":"#0ea5e9","label":"y = ⅔x − 1"}],"points":[{"x":0,"y":-1,"color":"#e53e3e","label":"(0, −1)","labelPos":"bl"},{"x":3,"y":1,"color":"#e53e3e","label":"(3, 1)","labelPos":"tr"}]}
      },
      {
        id: "d18q8", question: "A line has x-intercept (4, 0) and y-intercept (0, &minus;6). What is its slope?",
        type: "multiple-choice",
        options: ["&frac32;","&minus;&frac32;","&frac23;","&minus;&frac23;"],
        correct: 0,
        explanation: "m = (&minus;6 &minus; 0) / (0 &minus; 4) = &minus;6 / &minus;4 = <strong>&frac32;</strong>.",
        hints: ["You have two points — the intercepts. Use the slope formula with (4, 0) and (0, &minus;6).", "Compute rise over run: (y<sub>2</sub> &minus; y<sub>1</sub>) / (x<sub>2</sub> &minus; x<sub>1</sub>). Be careful with the negatives — they may cancel."],
        difficulty: "hard", category: "topic",
        graph: {"type":"coordPlane","xMin":-2,"xMax":6,"yMin":-8,"yMax":3,"width":280,"height":280,"lines":[{"m":1.5,"b":-6,"color":"#0ea5e9"}],"points":[{"x":4,"y":0,"color":"#e53e3e","label":"(4, 0)","labelPos":"tr"},{"x":0,"y":-6,"color":"#e53e3e","label":"(0, −6)","labelPos":"tl"}]}
      },
      {
        id: "d18q9", question: "Solve by factoring: x<sup>2</sup> &minus; 4x &minus; 21 = 0. (Review: Day 14)",
        type: "multiple-choice",
        options: ["x = 7 or x = &minus;3","x = &minus;7 or x = 3","x = 21 or x = &minus;1","x = &minus;21 or x = 1"],
        correct: 0,
        explanation: "Factor: (x &minus; 7)(x + 3) = 0. So x = 7 or x = &minus;3.",
        hints: ["Find two numbers that multiply to &minus;21 and add to &minus;4.", "The product is negative, so one factor is positive and one is negative. Which pair sums to &minus;4?"],
        difficulty: "medium", category: "review"
      },
      {
        id: "d18q10", question: "What is the discriminant of x<sup>2</sup> &minus; 6x + 9 = 0? (Review: Day 16)",
        type: "multiple-choice",
        options: ["0","36","&minus;36","72"],
        correct: 0,
        explanation: "D = (&minus;6)<sup>2</sup> &minus; 4(1)(9) = 36 &minus; 36 = <strong>0</strong>. One repeated real solution (x = 3).",
        hints: ["The discriminant is b<sup>2</sup> &minus; 4ac. Identify a, b, and c from the equation.", "Compute (&minus;6)<sup>2</sup> &minus; 4(1)(9). Remember that squaring a negative number gives a positive result."],
        difficulty: "medium", category: "review"
      }
    ]
  },
  day19: {
    lesson: {
      title: "Equations of Lines",
      subtitle: "From points and slopes to equations — learn every way to write the equation of a line.",
      sections: [
        {
          heading: "Point-Slope Form",
          paragraphs: [
            "When you know the slope of a line and one point it passes through, you can write its equation using <strong>point-slope form</strong>: y &minus; y<sub>1</sub> = m(x &minus; x<sub>1</sub>), where m is the slope and (x<sub>1</sub>, y<sub>1</sub>) is the given point.",
            "Why is this useful? Imagine you're told a line has slope 4 and passes through (2, 5). Plugging in: y &minus; 5 = 4(x &minus; 2). That's the equation! You can leave it in point-slope form or convert to slope-intercept form by distributing and simplifying: y &minus; 5 = 4x &minus; 8, so y = 4x &minus; 3.",
            "Point-slope form is especially handy when you <em>don't</em> know the y-intercept directly. It's the fastest way to write an equation when you're given a point and a slope. Think of it as the &ldquo;assembly instructions&rdquo; — you snap the point and slope right into the formula."
          ],
          example: {
            title: "Worked Example: Point-Slope Form",
            problem: "Write the equation of the line with slope &minus;2 passing through (3, 1). Give the answer in slope-intercept form.",
            steps: [
              "Start with point-slope form: y &minus; y<sub>1</sub> = m(x &minus; x<sub>1</sub>).",
              "Substitute m = &minus;2 and (x<sub>1</sub>, y<sub>1</sub>) = (3, 1): y &minus; 1 = &minus;2(x &minus; 3).",
              "Distribute: y &minus; 1 = &minus;2x + 6.",
              "Add 1 to both sides: y = &minus;2x + 7.",
              "Final answer: <strong>y = &minus;2x + 7</strong>."
            ],
              graphs: [{"type":"coordPlane","xMin":-1,"xMax":6,"yMin":-3,"yMax":9,"width":320,"height":320,"lines":[{"m":-2,"b":7,"color":"#0ea5e9","label":"y = −2x + 7"}],"points":[{"x":3,"y":1,"color":"#e53e3e","label":"(3, 1)","labelPos":"br"}],"caption":"Line passing through (3, 1) with slope −2"}]
           },
           practice: [
             {
               type: "type-answer",
               prompt: "Write the equation of the line through (2, 3) with slope 4 in y = mx + b form.",
               answer: "y=4x-5",
               accept: ["y=4x-5", "y = 4x - 5", "y = 4x − 5", "y=4x−5"],
               explanation: "Point-slope: y &minus; 3 = 4(x &minus; 2). Distribute: y &minus; 3 = 4x &minus; 8. Add 3: y = 4x &minus; 5."
             },
             {
               type: "type-answer",
               prompt: "What is the slope of a line parallel to y = 3x &minus; 7?",
               answer: "3",
               accept: ["3", "m=3", "m = 3"],
               explanation: "Parallel lines have the same slope. The slope of y = 3x &minus; 7 is 3."
             },
             {
               type: "multiple-quick",
               prompt: "In point-slope form y &minus; y<sub>1</sub> = m(x &minus; x<sub>1</sub>), what do you need?",
               options: ["A point and the slope", "Two slopes", "Just the y-intercept"],
               correct: 0,
               explanation: "Point-slope form requires one point (x<sub>1</sub>, y<sub>1</sub>) and the slope m."
             }
           ]
         },
         {
           heading: "Finding the Equation from Two Points",
          paragraphs: [
            "If you're given two points, you can find the equation of the line in two steps: <strong>Step 1:</strong> Compute the slope using m = (y<sub>2</sub> &minus; y<sub>1</sub>) / (x<sub>2</sub> &minus; x<sub>1</sub>). <strong>Step 2:</strong> Plug the slope and either point into point-slope form.",
            "For example, find the equation through (1, &minus;2) and (4, 7). First, the slope: m = (7 &minus; (&minus;2)) / (4 &minus; 1) = 9/3 = 3. Then plug into point-slope form using (1, &minus;2): y &minus; (&minus;2) = 3(x &minus; 1), which simplifies to y + 2 = 3x &minus; 3, so y = 3x &minus; 5.",
            "It doesn't matter which of the two points you use in the second step — you'll get the same equation either way. Try it! Using (4, 7) instead: y &minus; 7 = 3(x &minus; 4) &rArr; y &minus; 7 = 3x &minus; 12 &rArr; y = 3x &minus; 5. Same answer!"
          ],
          example: {
            title: "Worked Example: Equation from Two Points",
            problem: "Find the equation of the line through (&minus;1, 5) and (3, &minus;3).",
            steps: [
              "Find the slope: m = (&minus;3 &minus; 5) / (3 &minus; (&minus;1)) = &minus;8 / 4 = &minus;2.",
              "Use point-slope form with (&minus;1, 5): y &minus; 5 = &minus;2(x &minus; (&minus;1)).",
              "Simplify: y &minus; 5 = &minus;2(x + 1) = &minus;2x &minus; 2.",
              "Add 5: y = &minus;2x + 3.",
              "Final answer: <strong>y = &minus;2x + 3</strong>."
            ],
            graphs: [{"type":"coordPlane","xMin":-3,"xMax":5,"yMin":-5,"yMax":7,"width":320,"height":320,"lines":[{"m":-2,"b":3,"color":"#0ea5e9","label":"y = −2x + 3"}],"points":[{"x":-1,"y":5,"color":"#e53e3e","label":"(−1, 5)","labelPos":"tr"},{"x":3,"y":-3,"color":"#e53e3e","label":"(3, −3)","labelPos":"br"}],"caption":"Line through the two given points"}]
          }
        },
        {
          heading: "Parallel and Perpendicular Lines",
          paragraphs: [
            "<strong>Parallel lines</strong> never intersect and always have the <strong>same slope</strong>. If line 1 has slope m, any line parallel to it also has slope m. For example, y = 3x + 1 and y = 3x &minus; 7 are parallel because both have slope 3. They're like train tracks — always the same distance apart, never meeting.",
            "<strong>Perpendicular lines</strong> intersect at a 90&deg; angle. Their slopes are <strong>negative reciprocals</strong> of each other: if one line has slope m, the perpendicular line has slope &minus;1/m. The product of their slopes is &minus;1. For example, if a line has slope 2/3, a perpendicular line has slope &minus;3/2, because (2/3) &times; (&minus;3/2) = &minus;1.",
            "To write the equation of a line parallel (or perpendicular) to a given line through a specific point: first find the slope of the given line, then determine the new slope (same for parallel, negative reciprocal for perpendicular), and finally use point-slope form with the given point. Special case: horizontal and vertical lines are always perpendicular to each other."
          ],
          graphs: [{"type":"row","items":[{"type":"coordPlane","xMin":-5,"xMax":5,"yMin":-5,"yMax":5,"width":260,"height":260,"lines":[{"m":0.75,"b":1,"color":"#0ea5e9","label":"y = ¾x + 1"},{"m":0.75,"b":-2,"color":"#22c55e","label":"y = ¾x − 2","dashed":true}],"caption":"Parallel lines: same slope ¾"},{"type":"coordPlane","xMin":-5,"xMax":5,"yMin":-5,"yMax":5,"width":260,"height":260,"lines":[{"m":0.75,"b":0,"color":"#0ea5e9","label":"y = ¾x"},{"m":-1.333,"b":0,"color":"#e53e3e","label":"y = −⁴⁄₃x"}],"caption":"Perpendicular: slopes ¾ and −⁴⁄₃"}]}],
          example: {
            title: "Worked Example: Perpendicular Line",
            problem: "Write the equation of the line perpendicular to y = &frac34;x + 2 that passes through (6, &minus;1).",
            steps: [
              "The given line has slope &frac34;. The perpendicular slope is the negative reciprocal: m = &minus;<sup>4</sup>&frasl;<sub>3</sub> (flip and negate: &minus;4/3).",
              "Use point-slope form with (6, &minus;1): y &minus; (&minus;1) = &minus;<sup>4</sup>&frasl;<sub>3</sub>(x &minus; 6).",
              "Simplify: y + 1 = &minus;<sup>4</sup>&frasl;<sub>3</sub>x + 8.",
              "Subtract 1: y = &minus;<sup>4</sup>&frasl;<sub>3</sub>x + 7.",
              "Final answer: <strong>y = &minus;<sup>4</sup>&frasl;<sub>3</sub>x + 7</strong>."
            ],
            graphs: [{"type":"coordPlane","xMin":-2,"xMax":8,"yMin":-5,"yMax":8,"width":320,"height":320,"lines":[{"m":0.75,"b":2,"color":"#a0aec0","label":"y = ¾x + 2","dashed":true},{"m":-1.333,"b":7,"color":"#e53e3e","label":"y = −⁴⁄₃x + 7"}],"points":[{"x":6,"y":-1,"color":"#e53e3e","label":"(6, −1)","labelPos":"br"}],"caption":"The red line is perpendicular to the dashed grey line"}]
          }
        },
        {
          heading: "Converting Between Forms",
          paragraphs: [
            "Linear equations can be written in three main forms: <strong>slope-intercept</strong> (y = mx + b), <strong>point-slope</strong> (y &minus; y<sub>1</sub> = m(x &minus; x<sub>1</sub>)), and <strong>standard form</strong> (Ax + By = C, where A, B, C are integers and A &ge; 0). Each form has its strengths, so you should be comfortable converting between them.",
            "To convert from point-slope to slope-intercept: distribute the slope and solve for y. To convert from slope-intercept to standard form: move the x-term to the left side and clear any fractions by multiplying through. For example, y = &frac23;x &minus; 4 becomes &minus;&frac23;x + y = &minus;4, then multiply by &minus;3: 2x &minus; 3y = 12.",
            "To convert from standard form to slope-intercept: solve for y. From Ax + By = C: By = &minus;Ax + C, so y = (&minus;A/B)x + C/B. The slope is &minus;A/B and the y-intercept is C/B. Practice these conversions until they feel automatic — being able to switch forms freely is a powerful skill."
          ]
        }
      ]
    },
    quiz: [
      {
        id: "d19q1", question: "Write the equation of the line with slope 5 passing through (0, &minus;3).",
        type: "multiple-choice",
        options: ["y = 5x &minus; 3","y = &minus;3x + 5","y = 5x + 3","y = &minus;5x &minus; 3"],
        correct: 0,
        explanation: "Since the point is the y-intercept (0, &minus;3), use y = mx + b directly: <strong>y = 5x &minus; 3</strong>.",
        difficulty: "easy", category: "topic"
      },
      {
        id: "d19q2", question: "What is the slope of any line parallel to y = &minus;4x + 9?",
        type: "multiple-choice",
        options: ["&minus;4","4","&frac14;","&minus;&frac14;"],
        correct: 0,
        explanation: "Parallel lines have the <strong>same slope</strong>. The slope of y = &minus;4x + 9 is &minus;4.",
        difficulty: "easy", category: "topic",
        graph: {"type":"coordPlane","xMin":-2,"xMax":5,"yMin":-6,"yMax":10,"width":260,"height":260,"lines":[{"m":-4,"b":9,"color":"#0ea5e9","label":"y = −4x + 9"},{"m":-4,"b":2,"color":"#22c55e","label":"parallel","dashed":true}],"caption":"Parallel lines share the same slope"}
      },
      {
        id: "d19q3", question: "What is the slope of a line perpendicular to y = 2x + 1?",
        type: "multiple-choice",
        options: ["&minus;&frac12;","&frac12;","&minus;2","2"],
        correct: 0,
        explanation: "Perpendicular slopes are negative reciprocals. The negative reciprocal of 2 is <strong>&minus;&frac12;</strong>.",
        difficulty: "easy", category: "topic",
        graph: {"type":"coordPlane","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"width":260,"height":260,"lines":[{"m":2,"b":1,"color":"#0ea5e9","label":"y = 2x + 1"},{"m":-0.5,"b":0,"color":"#e53e3e","label":"m = −½","dashed":true}],"caption":"Perpendicular: slopes multiply to −1"}
      },
      {
        id: "d19q4", question: "Write in slope-intercept form: y &minus; 4 = 3(x &minus; 2).",
        type: "multiple-choice",
        options: ["y = 3x &minus; 2","y = 3x + 4","y = 3x + 2","y = 3x &minus; 10"],
        correct: 0,
        explanation: "Distribute: y &minus; 4 = 3x &minus; 6. Add 4: y = 3x &minus; 6 + 4 = <strong>3x &minus; 2</strong>.",
        hints: ["Start by distributing the 3 on the right side, then isolate y.", "After distributing, add 4 to both sides to get y by itself."],
        difficulty: "medium", category: "topic"
      },
      {
        id: "d19q5", question: "Find the equation of the line through (2, 1) and (6, 9).",
        type: "multiple-choice",
        options: ["y = 2x &minus; 3","y = 2x + 3","y = &frac12;x + 3","y = 4x &minus; 7"],
        correct: 0,
        explanation: "Slope: (9 &minus; 1)/(6 &minus; 2) = 8/4 = 2. Point-slope with (2, 1): y &minus; 1 = 2(x &minus; 2) &rArr; y = 2x &minus; 3.",
        hints: ["Two points → two steps: first find the slope, then use point-slope form with either point.", "Calculate the slope using rise over run, then plug the slope and one point into y &minus; y<sub>1</sub> = m(x &minus; x<sub>1</sub>)."],
        difficulty: "medium", category: "topic",
        graph: {"type":"coordPlane","xMin":-1,"xMax":8,"yMin":-4,"yMax":11,"width":280,"height":280,"points":[{"x":2,"y":1,"color":"#e53e3e","label":"(2, 1)","labelPos":"bl"},{"x":6,"y":9,"color":"#e53e3e","label":"(6, 9)","labelPos":"tl"}],"lines":[{"m":2,"b":-3,"color":"#0ea5e9","dashed":true}]}
      },
      {
        id: "d19q6", question: "Convert y = &frac25;x + 3 to standard form (Ax + By = C with integer coefficients).",
        type: "multiple-choice",
        options: ["2x &minus; 5y = &minus;15","&minus;2x + 5y = 15","2x + 5y = 15","2x &minus; 5y = 15"],
        correct: 0,
        explanation: "Multiply by 5: 5y = 2x + 15. Rearrange: &minus;2x + 5y = 15. Multiply by &minus;1 to make A positive: <strong>2x &minus; 5y = &minus;15</strong>.",
        hints: ["To clear the fraction, multiply every term by the denominator. Then move terms to get Ax + By = C.", "Multiply through by 5 to eliminate fractions, then rearrange so the x-term is on the left with a positive coefficient."],
        difficulty: "medium", category: "topic"
      },
      {
        id: "d19q7", question: "Find the equation of the line parallel to y = &minus;3x + 4 that passes through (2, 5).",
        type: "multiple-choice",
        options: ["y = &minus;3x + 11","y = &minus;3x + 1","y = &frac13;x + 5","y = 3x &minus; 1"],
        correct: 0,
        explanation: "Parallel slope: &minus;3. Point-slope: y &minus; 5 = &minus;3(x &minus; 2) &rArr; y &minus; 5 = &minus;3x + 6 &rArr; <strong>y = &minus;3x + 11</strong>.",
        hints: ["Parallel lines share the same slope — what is the slope of the given line?", "Use the slope &minus;3 with the point (2, 5) in point-slope form: y &minus; 5 = m(x &minus; 2)."],
        difficulty: "hard", category: "topic",
        graph: {"type":"coordPlane","xMin":-2,"xMax":6,"yMin":-4,"yMax":12,"width":280,"height":280,"lines":[{"m":-3,"b":4,"color":"#a0aec0","label":"y = −3x + 4","dashed":true},{"m":-3,"b":11,"color":"#e53e3e","label":"y = −3x + 11"}],"points":[{"x":2,"y":5,"color":"#e53e3e","label":"(2, 5)","labelPos":"tr"}]}
      },
      {
        id: "d19q8", question: "Find the equation of the line perpendicular to 2x + 6y = 12 that passes through (4, &minus;1).",
        type: "multiple-choice",
        options: ["y = 3x &minus; 13","y = &minus;3x + 11","y = &frac13;x &minus; 1","y = &minus;&frac13;x + 1"],
        correct: 0,
        explanation: "Rewrite: 6y = &minus;2x + 12, so y = &minus;&frac13;x + 2. Slope = &minus;&frac13;. Perpendicular slope = 3. Point-slope with (4, &minus;1): y + 1 = 3(x &minus; 4) &rArr; y = 3x &minus; 12 &minus; 1 = <strong>3x &minus; 13</strong>.",
        hints: ["First rewrite the given equation in slope-intercept form to find its slope, then take the negative reciprocal.", "The given slope is &minus;1/3. The perpendicular slope is the negative reciprocal — flip the fraction and change the sign."],
        difficulty: "hard", category: "topic",
        graph: {"type":"coordPlane","xMin":-1,"xMax":7,"yMin":-14,"yMax":4,"width":280,"height":280,"lines":[{"m":-0.333,"b":2,"color":"#a0aec0","label":"2x+6y=12","dashed":true},{"m":3,"b":-13,"color":"#e53e3e","label":"y = 3x − 13"}],"points":[{"x":4,"y":-1,"color":"#e53e3e","label":"(4, −1)","labelPos":"tr"}]}
      },
      {
        id: "d19q9", question: "Solve using the quadratic formula: x<sup>2</sup> &minus; 2x &minus; 15 = 0. (Review: Day 16)",
        type: "multiple-choice",
        options: ["x = 5 or x = &minus;3","x = &minus;5 or x = 3","x = 15 or x = &minus;1","x = &minus;15 or x = 1"],
        correct: 0,
        explanation: "a = 1, b = &minus;2, c = &minus;15. D = 4 + 60 = 64. x = (2 &pm; 8)/2. x = 10/2 = 5 or x = &minus;6/2 = &minus;3.",
        hints: ["Identify a, b, c carefully — note that both b and c are negative.", "Compute the discriminant first: b<sup>2</sup> &minus; 4ac = 4 &minus; 4(1)(&minus;15). The double negative gives a positive term."],
        difficulty: "medium", category: "review"
      },
      {
        id: "d19q10", question: "What is the slope and y-intercept of 4x &minus; 2y = 8? (Review: Day 18)",
        type: "multiple-choice",
        options: ["Slope 2, y-intercept &minus;4","Slope &minus;2, y-intercept 4","Slope 4, y-intercept &minus;2","Slope &minus;4, y-intercept 8"],
        correct: 0,
        explanation: "Solve for y: &minus;2y = &minus;4x + 8, so y = 2x &minus; 4. Slope = <strong>2</strong>, y-intercept = <strong>&minus;4</strong>.",
        hints: ["Convert to slope-intercept form (y = mx + b) by isolating y.", "Move the 4x to the right side, then divide every term by the coefficient of y."],
        difficulty: "medium", category: "review"
      }
    ]
  },
  day20: {
    lesson: {
      title: "Systems of Linear Equations",
      subtitle: "Two equations, two unknowns — finding the one point where two lines meet.",
      sections: [
        {
          heading: "What Is a System of Equations?",
          paragraphs: [
            "A <strong>system of linear equations</strong> is a set of two (or more) equations that share the same variables. For example: x + y = 10 and x &minus; y = 2. The <strong>solution</strong> to the system is the pair of values (x, y) that makes <em>both</em> equations true at the same time.",
            "Think of it like two friends describing the same mystery numbers. One friend says &ldquo;the two numbers add up to 10&rdquo; and the other says &ldquo;the difference is 2.&rdquo; Only one pair of numbers satisfies both clues &mdash; and that&rsquo;s exactly what we&rsquo;re solving for.",
            "Graphically, each linear equation is a line on the coordinate plane. The solution to the system is the <strong>point of intersection</strong> &mdash; where the two lines cross. If you find that point, you&rsquo;ve solved the system!"
          ],
          graphs: [{"type":"coordPlane","xMin":-2,"xMax":7,"yMin":-2,"yMax":8,"width":340,"height":340,"lines":[{"m":1,"b":1,"color":"#0ea5e9","label":"y = x + 1"},{"m":-1,"b":7,"color":"#e53e3e","label":"y = −x + 7"}],"points":[{"x":3,"y":4,"color":"#7c3aed","label":"(3, 4)","labelPos":"tr"}],"caption":"The solution (3, 4) is where the two lines intersect"}]
        },
        {
          heading: "The Substitution Method",
          paragraphs: [
            "The <strong>substitution method</strong> works by solving one equation for one variable and then plugging that expression into the other equation. This turns a two-variable problem into a one-variable problem you already know how to solve.",
            "Here&rsquo;s the strategy: pick whichever equation has a variable that&rsquo;s easiest to isolate (look for a coefficient of 1 or &minus;1). Solve for that variable, substitute into the other equation, solve, then back-substitute to find the second variable.",
            "Substitution is especially convenient when one equation already has a variable by itself, like y = 3x + 1 or x = 5 &minus; 2y. In those cases you can skip straight to the substitution step."
          ],
          example: {
            title: "Worked Example: Substitution Method",
            problem: "Solve the system: y = 2x + 1 and 3x + y = 11.",
            steps: [
              "The first equation already gives y in terms of x: y = 2x + 1.",
              "Substitute into the second equation: 3x + (2x + 1) = 11.",
              "Combine like terms: 5x + 1 = 11.",
              "Subtract 1 from both sides: 5x = 10.",
              "Divide by 5: x = 2.",
              "Back-substitute: y = 2(2) + 1 = 5.",
              "Solution: <strong>(x, y) = (2, 5)</strong>. Check: 3(2) + 5 = 11. &#10003;"
            ],
              graphs: [{"type":"coordPlane","xMin":-1,"xMax":6,"yMin":-1,"yMax":12,"width":320,"height":320,"lines":[{"m":2,"b":1,"color":"#0ea5e9","label":"y = 2x + 1"},{"m":-3,"b":11,"color":"#e53e3e","label":"3x + y = 11"}],"points":[{"x":2,"y":5,"color":"#7c3aed","label":"(2, 5)","labelPos":"tr"}],"caption":"The lines intersect at (2, 5)"}]
           },
           practice: [
             {
               type: "type-answer",
               prompt: "Solve by substitution: y = x + 1, and 2x + y = 7. What is x?",
               answer: "2",
               accept: ["2", "x=2", "x = 2"],
               explanation: "Substitute y = x + 1 into the second equation: 2x + (x + 1) = 7 &rArr; 3x + 1 = 7 &rArr; 3x = 6 &rArr; x = 2."
             },
             {
               type: "type-answer",
               prompt: "Using the system y = 3x &minus; 1 and x + y = 7, what is y?",
               answer: "5",
               accept: ["5", "y=5", "y = 5"],
               explanation: "Substitute: x + (3x &minus; 1) = 7 &rArr; 4x &minus; 1 = 7 &rArr; 4x = 8 &rArr; x = 2. Then y = 3(2) &minus; 1 = 5."
             },
             {
               type: "multiple-quick",
               prompt: "In the substitution method, what is the first step?",
               options: ["Solve one equation for one variable", "Add the two equations together", "Graph both equations"],
               correct: 0,
               explanation: "Substitution starts by isolating one variable in one equation, then substituting that expression into the other equation."
             }
           ]
         },
         {
           heading: "The Elimination (Addition) Method",
          paragraphs: [
            "The <strong>elimination method</strong> (also called the addition method) works by adding or subtracting the two equations so that one variable cancels out. If the coefficients of a variable are already opposites, just add the equations. Otherwise, multiply one or both equations by a constant first.",
            "For example, if you have 2x + 3y = 12 and 2x &minus; y = 4, notice that both equations have 2x. Subtract the second from the first: (2x + 3y) &minus; (2x &minus; y) = 12 &minus; 4, which gives 4y = 8, so y = 2.",
            "Elimination is often faster than substitution when neither equation has a variable with a coefficient of 1. The key is choosing which variable to eliminate &mdash; pick the one where matching coefficients requires the least multiplication."
          ],
          example: {
            title: "Worked Example: Elimination Method",
            problem: "Solve the system: 3x + 2y = 16 and x &minus; 2y = &minus;4.",
            steps: [
              "Notice that 2y and &minus;2y are already opposites. Add the two equations.",
              "(3x + 2y) + (x &minus; 2y) = 16 + (&minus;4).",
              "The y-terms cancel: 4x = 12.",
              "Divide by 4: x = 3.",
              "Substitute x = 3 into either equation. Using the second: 3 &minus; 2y = &minus;4.",
              "Subtract 3: &minus;2y = &minus;7. Divide by &minus;2: y = 3.5.",
              "Solution: <strong>(x, y) = (3, 3.5)</strong>. Check: 3(3) + 2(3.5) = 9 + 7 = 16. &#10003;"
            ]
          }
        },
        {
          heading: "Special Cases & Word Problems",
          paragraphs: [
            "Not every system has exactly one solution. If the two equations describe <strong>parallel lines</strong> (same slope, different y-intercepts), there is <strong>no solution</strong> &mdash; the lines never meet. When you solve algebraically, you&rsquo;ll get a false statement like 0 = 5.",
            "If the two equations are actually the <strong>same line</strong> in disguise (one is a multiple of the other), there are <strong>infinitely many solutions</strong> &mdash; every point on that line works. You&rsquo;ll get a true statement like 0 = 0.",
            "Systems shine in word problems with two unknowns. For example: &ldquo;Adult tickets cost $8 and child tickets cost $5. A group buys 20 tickets for $124. How many of each?&rdquo; Let a = adults and c = children. Equation 1: a + c = 20. Equation 2: 8a + 5c = 124. Solve the system to get a = 8, c = 12."
          ],
          graphs: [{"type":"row","items":[{"type":"coordPlane","xMin":-4,"xMax":4,"yMin":-4,"yMax":6,"width":260,"height":260,"lines":[{"m":2,"b":1,"color":"#0ea5e9","label":"y = 2x + 1"},{"m":2,"b":-2,"color":"#e53e3e","label":"y = 2x − 2"}],"caption":"No solution: parallel lines (same slope)"},{"type":"coordPlane","xMin":-4,"xMax":4,"yMin":-4,"yMax":6,"width":260,"height":260,"lines":[{"m":1.5,"b":-1,"color":"#0ea5e9","label":"y = 1.5x − 1"},{"m":1.5,"b":-1,"color":"#e53e3e","label":"3x − 2y = 2","dashed":true}],"caption":"Infinite solutions: same line"}]}]
        }
      ]
    },
    quiz: [
      {
        id: "d20q1", question: "Solve by substitution: y = x + 3 and x + y = 9.",
        type: "multiple-choice",
        options: ["(3, 6)","(6, 3)","(4, 5)","(5, 4)"],
        correct: 0,
        explanation: "Substitute y = x + 3 into x + y = 9: x + (x + 3) = 9 &rArr; 2x = 6 &rArr; x = 3, y = 6. Answer: <strong>(3, 6)</strong>.",
        difficulty: "easy", category: "topic",
        graph: {"type":"coordPlane","xMin":-1,"xMax":10,"yMin":-1,"yMax":10,"width":280,"height":280,"lines":[{"m":1,"b":3,"color":"#0ea5e9","label":"y = x + 3"},{"m":-1,"b":9,"color":"#e53e3e","label":"x + y = 9"}],"points":[{"x":3,"y":6,"color":"#7c3aed","label":"?","labelPos":"tr"}],"caption":"Where do the lines meet?"}
      },
      {
        id: "d20q2", question: "What does the solution to a system of two linear equations represent graphically?",
        type: "multiple-choice",
        options: ["The point where the two lines intersect","The slope of both lines","The y-intercepts of both lines","The midpoint between the lines"],
        correct: 0,
        explanation: "The solution is the <strong>point of intersection</strong> &mdash; the (x, y) pair that lies on both lines.",
        difficulty: "easy", category: "topic",
        graph: {"type":"coordPlane","xMin":-2,"xMax":6,"yMin":-2,"yMax":6,"width":260,"height":240,"lines":[{"m":0.5,"b":0,"color":"#0ea5e9","label":"Line 1"},{"m":-1,"b":5,"color":"#e53e3e","label":"Line 2"}],"points":[{"x":3.33,"y":1.67,"color":"#7c3aed","label":"solution","labelPos":"tr"}],"caption":"The solution is the intersection point"}
      },
      {
        id: "d20q3", question: "Solve: x + y = 7 and x &minus; y = 3.",
        type: "multiple-choice",
        options: ["(5, 2)","(2, 5)","(4, 3)","(3, 4)"],
        correct: 0,
        explanation: "Add the equations: 2x = 10 &rArr; x = 5. Then y = 7 &minus; 5 = 2. Answer: <strong>(5, 2)</strong>.",
        difficulty: "easy", category: "topic",
        graph: {"type":"coordPlane","xMin":-1,"xMax":9,"yMin":-2,"yMax":8,"width":280,"height":280,"lines":[{"m":-1,"b":7,"color":"#0ea5e9","label":"x + y = 7"},{"m":1,"b":-3,"color":"#e53e3e","label":"x − y = 3"}],"points":[{"x":5,"y":2,"color":"#7c3aed","label":"?","labelPos":"tr"}]}
      },
      {
        id: "d20q4", question: "Solve by elimination: 2x + 3y = 12 and 4x &minus; 3y = 6.",
        type: "multiple-choice",
        options: ["(3, 2)","(2, 3)","(6, 0)","(0, 4)"],
        correct: 0,
        explanation: "Add the equations: 6x = 18 &rArr; x = 3. Substitute: 2(3) + 3y = 12 &rArr; 3y = 6 &rArr; y = 2. Answer: <strong>(3, 2)</strong>.",
        hints: ["Look at the y-coefficients: 3y and &minus;3y are already opposites — what happens when you add the equations?", "After one variable cancels, solve for the other, then substitute back to find the second variable."],
        difficulty: "medium", category: "topic",
        graph: {"type":"coordPlane","xMin":-1,"xMax":7,"yMin":-2,"yMax":6,"width":280,"height":280,"lines":[{"m":-0.667,"b":4,"color":"#0ea5e9","label":"2x+3y=12"},{"m":1.333,"b":-2,"color":"#e53e3e","label":"4x−3y=6"}],"points":[{"x":3,"y":2,"color":"#7c3aed","label":"?","labelPos":"tr"}]}
      },
      {
        id: "d20q5", question: "Solve: y = 3x &minus; 1 and 2x + y = 9.",
        type: "multiple-choice",
        options: ["(2, 5)","(3, 8)","(1, 2)","(4, 11)"],
        correct: 0,
        explanation: "Substitute: 2x + (3x &minus; 1) = 9 &rArr; 5x = 10 &rArr; x = 2. Then y = 3(2) &minus; 1 = 5. Answer: <strong>(2, 5)</strong>.",
        hints: ["One equation already has y isolated — substitute that expression into the other equation.", "Replace y with 3x &minus; 1 in the second equation, then solve for x."],
        difficulty: "medium", category: "topic",
        graph: {"type":"coordPlane","xMin":-1,"xMax":6,"yMin":-2,"yMax":10,"width":280,"height":280,"lines":[{"m":3,"b":-1,"color":"#0ea5e9","label":"y = 3x−1"},{"m":-2,"b":9,"color":"#e53e3e","label":"2x+y=9"}],"points":[{"x":2,"y":5,"color":"#7c3aed","label":"?","labelPos":"tr"}]}
      },
      {
        id: "d20q6", question: "If solving a system gives you 0 = 5, what does that mean?",
        type: "multiple-choice",
        options: ["No solution (the lines are parallel)","Infinitely many solutions","Exactly one solution","The system has an error"],
        correct: 0,
        explanation: "A false statement like 0 = 5 means the lines are <strong>parallel</strong> and never intersect &mdash; <strong>no solution</strong>.",
        hints: ["Think about what 0 = 5 means logically — is that statement ever true?", "A false statement (contradiction) during solving means the system's equations describe lines that never meet."],
        difficulty: "medium", category: "topic",
        graph: {"type":"coordPlane","xMin":-4,"xMax":4,"yMin":-2,"yMax":6,"width":260,"height":220,"lines":[{"m":1,"b":1,"color":"#0ea5e9","label":"Line 1"},{"m":1,"b":3,"color":"#e53e3e","label":"Line 2"}],"caption":"Parallel lines — no intersection!"}
      },
      {
        id: "d20q7", question: "Solve the system: 3x + 4y = 25 and 5x &minus; 2y = 20.",
        type: "multiple-choice",
        options: ["(5, 2.5)","(3, 4)","(7, 1)","(4, 3.25)"],
        correct: 0,
        explanation: "Multiply the second equation by 2: 10x &minus; 4y = 40. Add to the first: 3x + 4y + 10x &minus; 4y = 25 + 40 &rArr; 13x = 65 &rArr; x = 5. Substitute back: 3(5) + 4y = 25 &rArr; 4y = 10 &rArr; y = 2.5. Check Eq2: 5(5) &minus; 2(2.5) = 25 &minus; 5 = 20 &#10003;. Answer: <strong>(5, 2.5)</strong>.",
        hints: ["Use elimination — which variable is easiest to cancel? Look at the y-coefficients: 4y and &minus;2y.", "Multiply the second equation by 2 to make the y-coefficients opposites (4y and &minus;4y), then add the equations."],
        difficulty: "hard", category: "topic",
        graph: {"type":"coordPlane","xMin":-1,"xMax":8,"yMin":-2,"yMax":8,"width":280,"height":280,"lines":[{"m":-0.75,"b":6.25,"color":"#0ea5e9","label":"3x+4y=25"},{"m":2.5,"b":-10,"color":"#e53e3e","label":"5x−2y=20"}],"points":[{"x":5,"y":2.5,"color":"#7c3aed","label":"(5, 2.5)","labelPos":"tr"}]}
      },
      {
        id: "d20q8", question: "Adult tickets cost $10 and student tickets cost $6. A group buys 15 tickets for $118. How many adult tickets were purchased?",
        type: "type-answer",
        answer: "7",
        accept: ["7","7 tickets","a=7","a = 7"],
        explanation: "Let a = adults, s = students. a + s = 15 and 10a + 6s = 118. From Eq1: s = 15 &minus; a. Substitute: 10a + 6(15 &minus; a) = 118 &rArr; 10a + 90 &minus; 6a = 118 &rArr; 4a = 28 &rArr; a = <strong>7</strong>.",
        hints: ["Set up two equations: one for the total number of tickets and one for the total cost.", "Let a = adult tickets. From a + s = 15, express s in terms of a, then substitute into the cost equation."],
        difficulty: "hard", category: "topic"
      },
      {
        id: "d20q9", question: "What is the slope of the line 4x &minus; 2y = 10? (Review: Day 18)",
        type: "multiple-choice",
        options: ["2","&minus;2","4","&minus;5"],
        correct: 0,
        explanation: "Rewrite in slope-intercept form: &minus;2y = &minus;4x + 10 &rArr; y = 2x &minus; 5. Slope = <strong>2</strong>.",
        hints: ["To find the slope from standard form, solve for y to get slope-intercept form.", "Isolate y: move 4x to the right side, then divide by &minus;2. The coefficient of x is the slope."],
        difficulty: "medium", category: "review"
      },
      {
        id: "d20q10", question: "Find the equation of the line passing through (0, 3) with slope &minus;2. (Review: Day 19)",
        type: "multiple-choice",
        options: ["y = &minus;2x + 3","y = 2x + 3","y = &minus;2x &minus; 3","y = 3x &minus; 2"],
        correct: 0,
        explanation: "Using slope-intercept form y = mx + b: m = &minus;2 and b = 3 (the y-intercept). So y = <strong>&minus;2x + 3</strong>.",
        hints: ["The point (0, 3) is on the y-axis, so 3 is the y-intercept (b) directly.", "Plug the slope and y-intercept straight into y = mx + b."],
        difficulty: "medium", category: "review"
      }
    ]
  }
};
