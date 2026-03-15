export const DAYS_1_6 = {  day1: {
    lesson: {
      title: "Variables, Expressions & Order of Operations",
      subtitle: "The building blocks of algebra — turning everyday situations into mathematical language.",
      sections: [
        {
          heading: "What Is a Variable?",
          paragraphs: [
            "A <strong>variable</strong> is a letter (like <em>x</em>, <em>y</em>, or <em>n</em>) that stands for a number we don&rsquo;t know yet. Think of it like an empty box &mdash; you know the box exists, but you haven&rsquo;t looked inside.",
            "Variables let us write general rules. Instead of saying &ldquo;3 plus some number equals 10,&rdquo; we write <strong>3 + x = 10</strong>. The letter <em>x</em> is a placeholder for the mystery number.",
            "In algebra, we often skip the multiplication sign. So <strong>5 &times; n</strong> is simply written as <strong>5n</strong>, and <strong>2 &times; x &times; y</strong> becomes <strong>2xy</strong>."
          ],
          example: {
            title: "Worked Example: Translating Words to Algebra",
            problem: "Write an algebraic expression for: &ldquo;Seven more than twice a number.&rdquo;",
            steps: [
              "Let the unknown number be <strong>n</strong>.",
              "\"Twice a number\" means <strong>2n</strong>.",
              "\"Seven more than\" means we add 7.",
              "The expression is <strong>2n + 7</strong>."
            ]
          }
        },
        {
          heading: "Algebraic Expressions vs. Equations",
          paragraphs: [
            "An <strong>expression</strong> is a combination of numbers, variables, and operations &mdash; like <strong>3x + 5</strong>. It does <em>not</em> have an equals sign.",
            "An <strong>equation</strong> states that two expressions are equal &mdash; like <strong>3x + 5 = 20</strong>. Equations can be solved; expressions can only be simplified or evaluated.",
            "Key vocabulary: the number in front of a variable is called its <strong>coefficient</strong> (in 7x, the coefficient is 7). A number on its own is called a <strong>constant</strong> (in 3x + 5, the constant is 5). Each piece separated by + or &minus; is called a <strong>term</strong>."
          ]
        },
        {
          heading: "Order of Operations (PEMDAS) Review",
          paragraphs: [
            "When an expression has multiple operations, we follow <strong>PEMDAS</strong>: <strong>P</strong>arentheses, <strong>E</strong>xponents, <strong>M</strong>ultiplication &amp; <strong>D</strong>ivision (left to right), <strong>A</strong>ddition &amp; <strong>S</strong>ubtraction (left to right).",
            "Multiplication and division have <em>equal</em> priority &mdash; work left to right. Same with addition and subtraction. A common mistake is thinking multiplication always comes before division.",
            "With variables, the same rules apply. To evaluate <strong>2x&sup2; + 3x &minus; 1</strong> when x = 4, first compute x&sup2; = 16, then multiply and add step by step."
          ],
          example: {
            title: "Worked Example: Evaluating an Expression",
            problem: "Evaluate 2x&sup2; + 3x &minus; 1 when x = 4.",
            steps: [
              "Substitute: 2(4)&sup2; + 3(4) &minus; 1.",
              "Exponent first: 4&sup2; = 16, so we have 2(16) + 3(4) &minus; 1.",
              "Multiply: 2 &times; 16 = 32 and 3 &times; 4 = 12.",
              "Add and subtract left to right: 32 + 12 &minus; 1 = <strong>43</strong>."
             ]
           },
           practice: [
             {
               type: "type-answer",
               prompt: "Evaluate 3x&sup2; &minus; 2x + 5 when x = 2.",
               answer: "13",
               accept: ["13"],
               explanation: "Substitute: 3(2)&sup2; &minus; 2(2) + 5 = 3(4) &minus; 4 + 5 = 12 &minus; 4 + 5 = 13."
             },
             {
               type: "type-answer",
               prompt: "Evaluate (4 + 6) &divide; 2 + 3 &times; 5.",
               answer: "20",
               accept: ["20"],
               explanation: "Parentheses first: 10 &divide; 2 + 3 &times; 5. Then left to right for same-precedence: 5 + 15 = 20."
             },
             {
               type: "multiple-quick",
               prompt: "In the expression 8 &minus; 2 &times; 3 + 4, which operation do you perform first?",
               options: ["Subtraction", "Multiplication", "Addition"],
               correct: 1,
               explanation: "PEMDAS says multiplication comes before addition and subtraction."
             }
           ]
         },
         {
           heading: "Combining Like Terms",
          paragraphs: [
            "<strong>Like terms</strong> have the same variable raised to the same power. For instance, 5x and 3x are like terms (both have x&sup1;), but 5x and 5x&sup2; are <em>not</em>.",
            "To simplify, add or subtract the coefficients of like terms: <strong>5x + 3x = 8x</strong>. Constants combine too: <strong>7 &minus; 2 = 5</strong>.",
            "Example: Simplify <strong>4x + 9 &minus; 2x + 3</strong>. Group like terms: (4x &minus; 2x) + (9 + 3) = <strong>2x + 12</strong>."
          ]
        }
      ]
    },
    quiz: [
      {
        id: "d1q1", question: "Which of the following is an <em>expression</em> (not an equation)?",
        type: "multiple-choice",
        options: ["3x + 7","3x + 7 = 22","x = 5","2 + 3 = 5"],
        correct: 0,
        explanation: "An expression has no equals sign. <strong>3x + 7</strong> is an expression; the others all contain &lsquo;=&rsquo; and are equations.",
        difficulty: "easy", category: "topic"
      },
      {
        id: "d1q2", question: "Translate into algebra: &ldquo;Five less than three times a number <em>n</em>.&rdquo;",
        type: "multiple-choice",
        options: ["5 &minus; 3n","3n &minus; 5","3(n &minus; 5)","3 &minus; 5n"],
        correct: 1,
        explanation: "\"Three times a number\" is 3n. \"Five less than\" means subtract 5 from that result: <strong>3n &minus; 5</strong>.",
        difficulty: "easy", category: "topic"
      },
      {
        id: "d1q3", question: "Evaluate 4x &minus; 7 when x = 3.",
        type: "type-answer",
        answer: "5",
        accept: ["5"],
        explanation: "Substitute x = 3: 4(3) &minus; 7 = 12 &minus; 7 = <strong>5</strong>.",
        difficulty: "easy", category: "topic"
      },
      {
        id: "d1q4", question: "Simplify: 6x + 4 &minus; 2x + 9.",
        type: "multiple-choice",
        options: ["8x + 13","4x + 13","4x + 5","8x + 5"],
        correct: 1,
        explanation: "Combine like terms: (6x &minus; 2x) + (4 + 9) = <strong>4x + 13</strong>.",
        difficulty: "medium", category: "topic",
        hints: ["Group the terms with x together and the plain numbers together.", "Combine 6x and &minus;2x first, then add 4 and 9."]
      },
      {
        id: "d1q5", question: "Evaluate 3a&sup2; &minus; 2a + 1 when a = &minus;2.",
        type: "multiple-choice",
        options: ["17","9","&minus;7","5"],
        correct: 0,
        explanation: "3(&minus;2)&sup2; &minus; 2(&minus;2) + 1 = 3(4) + 4 + 1 = 12 + 4 + 1 = <strong>17</strong>.",
        difficulty: "medium", category: "topic",
        hints: ["Remember: squaring a negative number gives a positive result.", "Start by computing (&minus;2)&sup2; = 4, then substitute that into 3(4)."]
      },
      {
        id: "d1q6", question: "What is the coefficient of <em>y</em> in the expression 8 &minus; 3y + y&sup2;?",
        type: "multiple-choice",
        options: ["8","&minus;3","1","3"],
        correct: 1,
        explanation: "The term with <em>y</em> (not y&sup2;) is &minus;3y, so the coefficient is <strong>&minus;3</strong>.",
        difficulty: "medium", category: "topic",
        hints: ["The coefficient is the number multiplied by the variable &mdash; look only at the y term, not the y&sup2; term.", "Find the term with just y (not y&sup2;) and include the sign in front of it."]
      },
      {
        id: "d1q7", question: "Simplify: 2(3x + 4) &minus; 5x.",
        type: "multiple-choice",
        options: ["x + 8","11x + 8","x + 4","6x + 8 &minus; 5x"],
        correct: 0,
        explanation: "Distribute: 6x + 8 &minus; 5x. Combine like terms: <strong>x + 8</strong>.",
        difficulty: "hard", category: "topic",
        hints: ["Use the distributive property to remove the parentheses first.", "Multiply 2 by each term inside: 2 &times; 3x and 2 &times; 4, then combine like terms."]
      },
      {
        id: "d1q8", question: "Evaluate (2x + 1)&sup2; when x = 3.",
        type: "multiple-choice",
        options: ["49","37","13","25"],
        correct: 0,
        explanation: "First compute 2(3) + 1 = 7. Then 7&sup2; = <strong>49</strong>.",
        difficulty: "hard", category: "topic",
        hints: ["Follow order of operations: simplify inside the parentheses before squaring.", "Start by computing 2(3) + 1 inside the parentheses, then square that result."]
      },
      {
        id: "d1q9", question: "Which expression represents &ldquo;the product of a number and the sum of that number and 6&rdquo;?",
        type: "multiple-choice",
        options: ["n + 6n","n(n + 6)","6n + n","n &times; 6 + n"],
        correct: 1,
        explanation: "\"Sum of the number and 6\" is (n + 6). \"Product of a number and\" that sum is <strong>n(n + 6)</strong>.",
        difficulty: "hard", category: "topic",
        hints: ["Break the phrase into parts: first find &ldquo;the sum of the number and 6,&rdquo; then think about &ldquo;product.&rdquo;", "Write the sum as (n + 6) in parentheses, then multiply the number n by that group."]
      },
      {
        id: "d1q10", question: "Simplify: 5x &minus; 3(2x &minus; 4) + 7.",
        type: "multiple-choice",
        options: ["&minus;x + 19","11x &minus; 5","&minus;x + 5","11x + 19"],
        correct: 0,
        explanation: "Distribute: 5x &minus; 6x + 12 + 7. Combine: (5x &minus; 6x) + (12 + 7) = <strong>&minus;x + 19</strong>.",
        difficulty: "hard", category: "topic",
        hints: ["Distribute the &minus;3 carefully &mdash; remember to multiply &minus;3 by both terms inside the parentheses.", "Start with &minus;3 &times; 2x and &minus;3 &times; (&minus;4), being careful with the signs."]
      }
    ]
  },
  day2: {
    lesson: {
      title: "Solving One-Step Equations",
      subtitle: "Using inverse operations to find the unknown — the heart of algebra.",
      sections: [
        {
          heading: "The Balance Model",
          paragraphs: [
            "An equation is like a <strong>balance scale</strong>. Whatever you do to one side, you must do to the other to keep it balanced.",
            "Solving an equation means finding the value of the variable that makes both sides equal. We call this value the <strong>solution</strong>.",
            "Always <strong>check</strong> your answer by substituting it back into the original equation. If both sides are equal, your solution is correct."
          ],
          example: {
            title: "Worked Example: Addition Equation",
            problem: "Solve x + 8 = 15.",
            steps: [
              "We want x alone. Since 8 is added to x, we do the <strong>inverse operation</strong>: subtract 8 from both sides.",
              "x + 8 &minus; 8 = 15 &minus; 8.",
              "x = <strong>7</strong>.",
              "Check: 7 + 8 = 15. &#10003;"
            ]
          }
        },
        {
          heading: "Subtraction & Addition Equations",
          paragraphs: [
            "If the equation has <strong>addition</strong>, undo it with <strong>subtraction</strong>: x + a = b &rArr; x = b &minus; a.",
            "If the equation has <strong>subtraction</strong>, undo it with <strong>addition</strong>: x &minus; a = b &rArr; x = b + a.",
            "These are <strong>inverse operations</strong> &mdash; they cancel each other out."
          ],
          example: {
            title: "Worked Example: Subtraction Equation",
            problem: "Solve y &minus; 12 = &minus;3.",
            steps: [
              "Since 12 is subtracted, add 12 to both sides.",
              "y &minus; 12 + 12 = &minus;3 + 12.",
              "y = <strong>9</strong>.",
              "Check: 9 &minus; 12 = &minus;3. &#10003;"
            ]
          }
        },
        {
          heading: "Multiplication & Division Equations",
          paragraphs: [
            "If the variable is <strong>multiplied</strong> by a number, <strong>divide</strong> both sides by that number: ax = b &rArr; x = b &divide; a.",
            "If the variable is <strong>divided</strong> by a number, <strong>multiply</strong> both sides by that number: x/a = b &rArr; x = ab.",
            "Be careful with negative numbers &mdash; dividing or multiplying by a negative is perfectly fine, and the sign rules apply as usual."
          ],
          example: {
            title: "Worked Example: Multiplication Equation",
            problem: "Solve &minus;4x = 28.",
            steps: [
              "x is multiplied by &minus;4. Divide both sides by &minus;4.",
              "&minus;4x &divide; (&minus;4) = 28 &divide; (&minus;4).",
              "x = <strong>&minus;7</strong>.",
               "Check: &minus;4(&minus;7) = 28. &#10003;"
             ]
           },
           practice: [
             {
               type: "type-answer",
               prompt: "Solve: 7x = 42.",
               answer: "6",
               accept: ["6", "x=6", "x = 6"],
               explanation: "Divide both sides by 7: x = 42 &divide; 7 = 6."
             },
             {
               type: "type-answer",
               prompt: "Solve: x/4 = 9.",
               answer: "36",
               accept: ["36", "x=36", "x = 36"],
               explanation: "Multiply both sides by 4: x = 9 &times; 4 = 36."
             },
             {
               type: "multiple-quick",
               prompt: "To solve 5x = &minus;30, you should:",
               options: ["Divide both sides by 5", "Subtract 5 from both sides", "Add 30 to both sides"],
               correct: 0,
               explanation: "Since x is multiplied by 5, divide both sides by 5 to isolate x: x = &minus;6."
             }
           ]
         },
         {
           heading: "Equations with Fractions",
          paragraphs: [
            "When you see x/5 = 3, multiply both sides by 5 to isolate x: x = 15.",
            "If the equation is (2/3)x = 10, multiply both sides by the <strong>reciprocal</strong> 3/2: x = 10 &times; 3/2 = 15.",
            "The reciprocal trick works because (2/3) &times; (3/2) = 1, leaving x alone."
          ]
        }
      ]
    },
    quiz: [
      {
        id: "d2q1", question: "Solve: x + 14 = 23.",
        type: "type-answer",
        answer: "9",
        accept: ["9", "x=9", "x = 9"],
        explanation: "Subtract 14 from both sides: x = 23 &minus; 14 = <strong>9</strong>.",
        difficulty: "easy", category: "topic"
      },
      {
        id: "d2q2", question: "Solve: n &minus; 7 = &minus;10.",
        type: "multiple-choice",
        options: ["n = &minus;3","n = &minus;17","n = 3","n = 17"],
        correct: 0,
        explanation: "Add 7 to both sides: n = &minus;10 + 7 = <strong>&minus;3</strong>.",
        difficulty: "easy", category: "topic"
      },
      {
        id: "d2q3", question: "Solve: 5y = &minus;35.",
        type: "multiple-choice",
        options: ["y = &minus;7","y = 7","y = &minus;30","y = &minus;40"],
        correct: 0,
        explanation: "Divide both sides by 5: y = &minus;35 &divide; 5 = <strong>&minus;7</strong>.",
        difficulty: "easy", category: "topic"
      },
      {
        id: "d2q4", question: "Solve: x/4 = &minus;9.",
        type: "multiple-choice",
        options: ["x = &minus;36","x = 36","x = &minus;13","x = &minus;5"],
        correct: 0,
        explanation: "Multiply both sides by 4: x = &minus;9 &times; 4 = <strong>&minus;36</strong>.",
        difficulty: "medium", category: "topic",
        hints: ["Think about what operation undoes division.", "Multiply both sides by 4 to isolate x."]
      },
      {
        id: "d2q5", question: "Solve: &minus;8m = 56.",
        type: "multiple-choice",
        options: ["m = &minus;7","m = 7","m = &minus;48","m = 64"],
        correct: 0,
        explanation: "Divide both sides by &minus;8: m = 56 &divide; (&minus;8) = <strong>&minus;7</strong>.",
        difficulty: "medium", category: "topic",
        hints: ["Think about what operation undoes multiplication.", "Divide both sides by &minus;8, and remember that positive &divide; negative = negative."]
      },
      {
        id: "d2q6", question: "Solve: (2/3)x = 18.",
        type: "multiple-choice",
        options: ["x = 12","x = 27","x = 6","x = 36"],
        correct: 1,
        explanation: "Multiply both sides by the reciprocal 3/2: x = 18 &times; 3/2 = <strong>27</strong>.",
        difficulty: "medium", category: "topic",
        hints: ["To undo multiplying by a fraction, multiply by its reciprocal.", "The reciprocal of 2/3 is 3/2 &mdash; multiply both sides by 3/2."]
      },
      {
        id: "d2q7", question: "Solve: &minus;x = 13.",
        type: "multiple-choice",
        options: ["x = &minus;13","x = 13","x = 1/13","x = 0"],
        correct: 0,
        explanation: "&minus;x means &minus;1 &times; x. Divide both sides by &minus;1: x = <strong>&minus;13</strong>.",
        difficulty: "hard", category: "topic",
        hints: ["Remember that &minus;x is the same as &minus;1 times x.", "Divide both sides by &minus;1 to find x."]
      },
      {
        id: "d2q8", question: "Solve: x/(&minus;6) = 7.",
        type: "multiple-choice",
        options: ["x = &minus;42","x = 42","x = &minus;1","x = &minus;13"],
        correct: 0,
        explanation: "Multiply both sides by &minus;6: x = 7 &times; (&minus;6) = <strong>&minus;42</strong>.",
        difficulty: "hard", category: "topic",
        hints: ["To undo dividing by a number, multiply both sides by that same number.", "Multiply both sides by &minus;6, and pay attention to the sign."]
      },
      {
        id: "d2q9", question: "Evaluate 3x &minus; 2 when x = &minus;4. (Review: Day 1)",
        type: "multiple-choice",
        options: ["&minus;14","10","&minus;10","14"],
        correct: 0,
        explanation: "3(&minus;4) &minus; 2 = &minus;12 &minus; 2 = <strong>&minus;14</strong>.",
        difficulty: "medium", category: "review",
        hints: ["Replace every x with &minus;4, then follow order of operations.", "Start by computing 3 &times; (&minus;4), remembering that positive &times; negative = negative."]
      },
      {
        id: "d2q10", question: "Simplify: 7a &minus; 3 + 2a &minus; 8. (Review: Day 1)",
        type: "multiple-choice",
        options: ["9a &minus; 11","5a &minus; 11","9a + 5","5a + 5"],
        correct: 0,
        explanation: "Combine like terms: (7a + 2a) + (&minus;3 &minus; 8) = <strong>9a &minus; 11</strong>.",
        difficulty: "medium", category: "review",
        hints: ["Identify the like terms: which terms have the variable a and which are just numbers?", "Add 7a + 2a for the variable part, and add &minus;3 + (&minus;8) for the constants."]
      }
    ]
  },
  day3: {
    lesson: {
      title: "Solving Multi-Step Equations",
      subtitle: "Peeling back the layers — undoing multiple operations to isolate the variable.",
      sections: [
        {
          heading: "Two-Step Equations",
          paragraphs: [
            "A <strong>two-step equation</strong> has two operations applied to the variable. For example, in <strong>2x + 5 = 13</strong>, we first multiplied by 2 and then added 5.",
            "To solve, <strong>undo the operations in reverse order</strong>: first undo the addition/subtraction, then undo the multiplication/division. Think of it like getting undressed &mdash; you take off the outer layer first.",
            "Step 1: Subtract 5 from both sides &rarr; 2x = 8. Step 2: Divide both sides by 2 &rarr; x = 4."
          ],
          example: {
            title: "Worked Example: Two-Step Equation",
            problem: "Solve 3x &minus; 7 = 14.",
            steps: [
              "Add 7 to both sides: 3x = 14 + 7 = 21.",
              "Divide both sides by 3: x = 21 &divide; 3 = <strong>7</strong>.",
               "Check: 3(7) &minus; 7 = 21 &minus; 7 = 14. &#10003;"
             ]
           },
           practice: [
             {
               type: "type-answer",
               prompt: "Solve: 5x + 3 = 28.",
               answer: "5",
               accept: ["5", "x=5", "x = 5"],
               explanation: "Subtract 3: 5x = 25. Divide by 5: x = 5."
             },
             {
               type: "type-answer",
               prompt: "Solve: 4x &minus; 9 = 15.",
               answer: "6",
               accept: ["6", "x=6", "x = 6"],
               explanation: "Add 9: 4x = 24. Divide by 4: x = 6."
             },
             {
               type: "multiple-quick",
               prompt: "To solve 2x + 7 = 19, what is the correct first step?",
               options: ["Divide both sides by 2", "Subtract 7 from both sides", "Add 7 to both sides"],
               correct: 1,
               explanation: "Undo addition first: subtract 7 from both sides to get 2x = 12."
             }
           ]
         },
         {
           heading: "Equations with the Distributive Property",
          paragraphs: [
            "The <strong>distributive property</strong> says a(b + c) = ab + ac. Use it to clear parentheses before combining like terms.",
            "Example: Solve <strong>2(x + 3) = 16</strong>. Distribute: 2x + 6 = 16. Subtract 6: 2x = 10. Divide by 2: x = 5.",
            "You can also divide first: 2(x + 3) = 16 &rArr; x + 3 = 8 &rArr; x = 5. Both approaches work!"
          ]
        },
        {
          heading: "Variables on Both Sides",
          paragraphs: [
            "When the variable appears on <em>both</em> sides of the equation, move all variable terms to one side and constants to the other.",
            "Strategy: subtract the smaller variable term from both sides, then solve the resulting two-step equation.",
            "Example: <strong>5x + 2 = 3x + 10</strong>. Subtract 3x from both sides: 2x + 2 = 10. Subtract 2: 2x = 8. Divide by 2: x = 4."
          ],
          example: {
            title: "Worked Example: Variables on Both Sides",
            problem: "Solve 7x &minus; 4 = 3x + 12.",
            steps: [
              "Subtract 3x from both sides: 4x &minus; 4 = 12.",
              "Add 4 to both sides: 4x = 16.",
              "Divide by 4: x = <strong>4</strong>.",
              "Check: 7(4) &minus; 4 = 24 and 3(4) + 12 = 24. &#10003;"
            ]
          }
        },
        {
          heading: "Special Cases: No Solution & Infinite Solutions",
          paragraphs: [
            "Sometimes solving leads to a <strong>false statement</strong> like 0 = 5. This means there is <strong>no solution</strong> &mdash; no value of x makes the equation true.",
            "Other times you get a <strong>true statement</strong> like 0 = 0 or 3 = 3. This means the equation is true for <em>all</em> values of x &mdash; <strong>infinitely many solutions</strong>.",
            "Example of no solution: 2(x + 1) = 2x + 5 &rArr; 2x + 2 = 2x + 5 &rArr; 2 = 5. False! No solution."
          ]
        }
      ]
    },
    quiz: [
      {
        id: "d3q1", question: "Solve: 4x + 3 = 19.",
        type: "type-answer",
        answer: "4",
        accept: ["4", "x=4", "x = 4"],
        explanation: "Subtract 3: 4x = 16. Divide by 4: x = <strong>4</strong>.",
        difficulty: "easy", category: "topic"
      },
      {
        id: "d3q2", question: "Solve: (x/3) + 5 = 9.",
        type: "multiple-choice",
        options: ["x = 12","x = 42","x = 4","x = 3"],
        correct: 0,
        explanation: "Subtract 5: x/3 = 4. Multiply by 3: x = <strong>12</strong>.",
        difficulty: "easy", category: "topic"
      },
      {
        id: "d3q3", question: "Solve: 5(x &minus; 2) = 20.",
        type: "multiple-choice",
        options: ["x = 6","x = 4","x = 2","x = 10"],
        correct: 0,
        explanation: "Divide by 5: x &minus; 2 = 4. Add 2: x = <strong>6</strong>.",
        difficulty: "easy", category: "topic"
      },
      {
        id: "d3q4", question: "Solve: 3(2x + 1) = 4x + 11.",
        type: "multiple-choice",
        options: ["x = 4","x = 2","x = 7","x = &minus;4"],
        correct: 0,
        explanation: "Distribute: 6x + 3 = 4x + 11. Subtract 4x: 2x + 3 = 11. Subtract 3: 2x = 8. x = <strong>4</strong>.",
        difficulty: "medium", category: "topic",
        hints: ["Start by distributing the 3 on the left side to remove the parentheses.", "After distributing, get all x-terms on one side by subtracting the smaller x-term."]
      },
      {
        id: "d3q5", question: "Solve: 8 &minus; 2x = 3x + 18.",
        type: "multiple-choice",
        options: ["x = &minus;2","x = 2","x = 5.2","x = &minus;5.2"],
        correct: 0,
        explanation: "Add 2x to both sides: 8 = 5x + 18. Subtract 18: &minus;10 = 5x. Divide by 5: x = <strong>&minus;2</strong>.",
        difficulty: "medium", category: "topic",
        hints: ["Variables are on both sides &mdash; move all x-terms to one side first.", "Add 2x to both sides to collect the variable terms on the right."]
      },
      {
        id: "d3q6", question: "Which equation has <strong>no solution</strong>?",
        type: "multiple-choice",
        options: ["3(x + 2) = 3x + 8","2x + 4 = 2(x + 2)","x + 1 = 1 + x","5x = 25"],
        correct: 0,
        explanation: "3(x + 2) = 3x + 6, but the right side is 3x + 8. This gives 6 = 8, which is false &mdash; <strong>no solution</strong>.",
        difficulty: "medium", category: "topic",
        hints: ["An equation has no solution when simplifying leads to a false statement like 5 = 8.", "Try distributing and simplifying each option &mdash; look for one where the variable cancels and you get a contradiction."]
      },
      {
        id: "d3q7", question: "Solve: 2(3x &minus; 5) &minus; 4x = 3(x + 1).",
        type: "multiple-choice",
        options: ["x = &minus;13","x = 13","x = 3","No solution"],
        correct: 0,
        explanation: "Distribute: 6x &minus; 10 &minus; 4x = 3x + 3. Simplify left: 2x &minus; 10 = 3x + 3. Subtract 2x: &minus;10 = x + 3. Subtract 3: x = <strong>&minus;13</strong>.",
        difficulty: "hard", category: "topic",
        hints: ["Distribute on both sides first, then combine like terms on each side.", "After distributing, simplify the left side to 2x &minus; 10, then move variable terms to one side."]
      },
      {
        id: "d3q8", question: "Solve: (x + 3)/4 = (2x &minus; 1)/3.",
        type: "multiple-choice",
        options: ["x = 13/5","x = 5","x = 2","x = &minus;1"],
        correct: 0,
        explanation: "Cross-multiply: 3(x + 3) = 4(2x &minus; 1). So 3x + 9 = 8x &minus; 4. Rearrange: 13 = 5x. x = <strong>13/5</strong>.",
        difficulty: "hard", category: "topic",
        hints: ["When you have a fraction equal to a fraction, you can cross-multiply to eliminate the denominators.", "Cross-multiply: multiply 3 by (x + 3) and 4 by (2x &minus; 1), then solve the resulting equation."]
      },
      {
        id: "d3q9", question: "Solve: n + 17 = &minus;5. (Review: Day 2)",
        type: "multiple-choice",
        options: ["n = &minus;22","n = 12","n = 22","n = &minus;12"],
        correct: 0,
        explanation: "Subtract 17: n = &minus;5 &minus; 17 = <strong>&minus;22</strong>.",
        difficulty: "medium", category: "review",
        hints: ["Use the inverse operation to undo the addition of 17.", "Subtract 17 from both sides, and be careful with the negative number on the right."]
      },
      {
        id: "d3q10", question: "Evaluate 5(2a &minus; 3) when a = 4. (Review: Day 1)",
        type: "multiple-choice",
        options: ["25","35","17","37"],
        correct: 0,
        explanation: "2(4) &minus; 3 = 5. Then 5 &times; 5 = <strong>25</strong>.",
        difficulty: "medium", category: "review",
        hints: ["Substitute a = 4 inside the parentheses first, then multiply by 5.", "Compute 2(4) &minus; 3 inside the parentheses before multiplying by the 5 outside."]
      }
    ]
  },
  day4: {
    lesson: {
      title: "Word Problems with Linear Equations",
      subtitle: "Turning real-world scenarios into equations you can solve.",
      sections: [
        {
          heading: "The 4-Step Strategy",
          paragraphs: [
            "Word problems can feel overwhelming, but a consistent strategy makes them manageable. Follow these four steps every time:",
            "<strong>Step 1 &mdash; Define the variable.</strong> Decide what the unknown is and assign it a letter. Write it down: &ldquo;Let x = &hellip;&rdquo;",
            "<strong>Step 2 &mdash; Write the equation.</strong> Translate the English sentence into math, phrase by phrase. <strong>Step 3 &mdash; Solve.</strong> Use the techniques from Days 2&ndash;3. <strong>Step 4 &mdash; Check &amp; answer in context.</strong> Substitute back and make sure the answer makes sense (no negative ages, no fractional people, etc.)."
          ],
          example: {
            title: "Worked Example: Age Problem",
            problem: "Maria is 5 years older than twice her brother&rsquo;s age. Maria is 29. How old is her brother?",
            steps: [
              "Let b = brother&rsquo;s age.",
              "\"5 years older than twice his age\" &rArr; 2b + 5 = 29.",
              "Subtract 5: 2b = 24. Divide by 2: b = 12.",
               "Check: 2(12) + 5 = 29. &#10003; Her brother is <strong>12 years old</strong>."
             ]
           },
           practice: [
             {
               type: "type-answer",
               prompt: "A number tripled minus 4 equals 20. What is the number?",
               answer: "8",
               accept: ["8", "x=8", "x = 8"],
               explanation: "Let x = the number. 3x &minus; 4 = 20. Add 4: 3x = 24. Divide by 3: x = 8."
             },
             {
               type: "type-answer",
               prompt: "Sam is 3 years older than twice Mia's age. Sam is 17. How old is Mia?",
               answer: "7",
               accept: ["7"],
               explanation: "Let m = Mia's age. 2m + 3 = 17. Subtract 3: 2m = 14. Divide by 2: m = 7."
             },
             {
               type: "multiple-quick",
               prompt: "What is the first step in solving a word problem?",
               options: ["Define the variable", "Write the answer", "Graph the equation"],
               correct: 0,
               explanation: "Always start by defining what your variable represents (e.g., let x = the unknown quantity)."
             }
           ]
         },
         {
           heading: "Number Problems",
          paragraphs: [
            "Number problems describe relationships between unknown numbers. Common phrases: &ldquo;the sum of two consecutive integers,&rdquo; &ldquo;one number is 4 more than another.&rdquo;",
            "<strong>Consecutive integers</strong> are written as n, n + 1, n + 2, &hellip; Consecutive <em>even</em> or <em>odd</em> integers use a gap of 2: n, n + 2, n + 4.",
            "Example: The sum of three consecutive integers is 72. Write: n + (n + 1) + (n + 2) = 72 &rArr; 3n + 3 = 72 &rArr; n = 23. The integers are 23, 24, 25."
          ]
        },
        {
          heading: "Money & Mixture Problems",
          paragraphs: [
            "For money problems, identify the <strong>rate</strong> (price per item) and the <strong>quantity</strong>. The key relationship is: <strong>Total = Rate &times; Quantity</strong>.",
            "Example: Adult tickets cost $12 and child tickets cost $8. If 50 tickets total were sold for $520, how many of each? Let a = adult tickets. Then child tickets = 50 &minus; a.",
            "Equation: 12a + 8(50 &minus; a) = 520. Distribute: 12a + 400 &minus; 8a = 520. Simplify: 4a = 120. So a = 30 adults and 20 children."
          ]
        },
        {
          heading: "Distance, Rate & Time",
          paragraphs: [
            "The fundamental formula is <strong>Distance = Rate &times; Time</strong>, or d = rt.",
            "When two objects move toward each other, their combined rate equals the sum of their individual rates. When moving in the same direction, subtract.",
            "Tip: Draw a diagram or make a table with columns for d, r, and t for each object. This organizes the information before you write the equation."
          ],
          example: {
            title: "Worked Example: Distance Problem",
            problem: "Two trains leave the same station in opposite directions. One travels at 60 mph and the other at 80 mph. How long until they are 350 miles apart?",
            steps: [
              "Let t = time in hours.",
              "Distance by train 1: 60t. Distance by train 2: 80t.",
              "Total distance apart: 60t + 80t = 350.",
              "140t = 350. So t = 350/140 = <strong>2.5 hours</strong>."
            ]
          }
        }
      ]
    },
    quiz: [
      {
        id: "d4q1", question: "A number increased by 9 is 24. What is the number?",
        type: "multiple-choice",
        options: ["15","33","9","24"],
        correct: 0,
        explanation: "x + 9 = 24. Subtract 9: x = <strong>15</strong>.",
        difficulty: "easy", category: "topic"
      },
      {
        id: "d4q2", question: "Tom is 3 years older than twice Lily&rsquo;s age. Tom is 19. How old is Lily?",
        type: "multiple-choice",
        options: ["8","11","7","22"],
        correct: 0,
        explanation: "2L + 3 = 19. So 2L = 16, L = <strong>8</strong>.",
        difficulty: "easy", category: "topic"
      },
      {
        id: "d4q3", question: "The sum of two consecutive integers is 47. What is the smaller integer?",
        type: "multiple-choice",
        options: ["23","24","22","25"],
        correct: 0,
        explanation: "n + (n + 1) = 47. So 2n + 1 = 47, 2n = 46, n = <strong>23</strong>.",
        difficulty: "easy", category: "topic"
      },
      {
        id: "d4q4", question: "The perimeter of a rectangle is 56 cm. The length is 4 cm more than the width. Find the width.",
        type: "multiple-choice",
        options: ["12 cm","16 cm","14 cm","10 cm"],
        correct: 0,
        explanation: "Let w = width. Length = w + 4. Perimeter: 2(w + w + 4) = 56. So 2(2w + 4) = 56 &rArr; 4w + 8 = 56 &rArr; 4w = 48 &rArr; w = <strong>12</strong>.",
        difficulty: "medium", category: "topic",
        hints: ["Recall that the perimeter of a rectangle is 2 &times; (length + width).", "Let w be the width, so the length is w + 4. Plug both into the perimeter formula."]
      },
      {
        id: "d4q5", question: "Apples cost $2 each and oranges cost $3 each. Sam buys 10 fruits for $24. How many apples did he buy?",
        type: "multiple-choice",
        options: ["6","4","8","5"],
        correct: 0,
        explanation: "Let a = apples. Then oranges = 10 &minus; a. 2a + 3(10 &minus; a) = 24. So 2a + 30 &minus; 3a = 24 &rArr; &minus;a = &minus;6 &rArr; a = <strong>6</strong>.",
        difficulty: "medium", category: "topic",
        hints: ["If he bought a apples, how many oranges did he buy out of 10 total?", "Write the total cost equation: 2a + 3(10 &minus; a) = 24, then solve for a."]
      },
      {
        id: "d4q6", question: "The sum of three consecutive <em>odd</em> integers is 93. What is the largest?",
        type: "multiple-choice",
        options: ["33","31","35","29"],
        correct: 0,
        explanation: "n + (n+2) + (n+4) = 93. So 3n + 6 = 93, 3n = 87, n = 29. The largest is 29 + 4 = <strong>33</strong>.",
        difficulty: "medium", category: "topic",
        hints: ["Consecutive odd integers differ by 2, so write them as n, n+2, n+4.", "After finding the smallest integer, add 4 to get the largest of the three."]
      },
      {
        id: "d4q7", question: "A car and a truck start from the same point driving in opposite directions. The car goes 55 mph and the truck goes 45 mph. After how many hours are they 300 miles apart?",
        type: "multiple-choice",
        options: ["3 hours","2.5 hours","6 hours","3.5 hours"],
        correct: 0,
        explanation: "55t + 45t = 300. So 100t = 300, t = <strong>3 hours</strong>.",
        difficulty: "hard", category: "topic",
        hints: ["When two objects travel in opposite directions, their distances add up.", "Use distance = rate &times; time for each vehicle and set the sum equal to 300."]
      },
      {
        id: "d4q8", question: "Maya has $5 and $10 bills totaling $95. She has 13 bills. How many $10 bills does she have?",
        type: "multiple-choice",
        options: ["8","5","9","6"],
        correct: 0,
        explanation: "Let t = number of $10 bills. Then $5 bills = 13 &minus; t. 5(13 &minus; t) + 10t = 95 &rArr; 65 &minus; 5t + 10t = 95 &rArr; 5t = 30 &rArr; t = <strong>8</strong> (so she has 8 ten-dollar bills and 5 five-dollar bills, totaling $80 + $15 = $95).",
        difficulty: "hard", category: "topic",
        hints: ["If t is the number of $10 bills, then the number of $5 bills is 13 &minus; t.", "Write the total value equation: 5(13 &minus; t) + 10t = 95, then solve for t."]
      },
      {
        id: "d4q9", question: "Solve: 2(x + 5) = 3x &minus; 1. (Review: Day 3)",
        type: "multiple-choice",
        options: ["x = 11","x = 9","x = &minus;11","x = 1"],
        correct: 0,
        explanation: "2x + 10 = 3x &minus; 1. Subtract 2x: 10 = x &minus; 1. Add 1: x = <strong>11</strong>.",
        difficulty: "medium", category: "review",
        hints: ["Start by distributing the 2 on the left side.", "After distributing, move all x-terms to one side and constants to the other."]
      },
      {
        id: "d4q10", question: "Solve: &minus;6m = 42. (Review: Day 2)",
        type: "multiple-choice",
        options: ["m = &minus;7","m = 7","m = &minus;48","m = 48"],
        correct: 0,
        explanation: "Divide both sides by &minus;6: m = 42 &divide; (&minus;6) = <strong>&minus;7</strong>.",
        difficulty: "medium", category: "review",
        hints: ["Think about what operation undoes multiplication by &minus;6.", "Divide both sides by &minus;6, remembering that positive &divide; negative gives a negative result."]
      }
    ]
  },
  day5: {
    lesson: {
      title: "Inequalities",
      subtitle: "When the answer isn't just one number — finding a whole range of solutions.",
      sections: [
        {
          heading: "What Is an Inequality?",
          paragraphs: [
            "An <strong>inequality</strong> compares two expressions using one of these symbols: <strong>&lt;</strong> (less than), <strong>&gt;</strong> (greater than), <strong>&le;</strong> (less than or equal to), <strong>&ge;</strong> (greater than or equal to).",
            "Unlike equations, inequalities usually have <strong>infinitely many solutions</strong>. For example, x &gt; 3 is satisfied by 4, 3.5, 100, and every number greater than 3.",
            "We represent solutions on a <strong>number line</strong>: an <em>open circle</em> at 3 for x &gt; 3 (3 is not included) and a <em>closed/filled circle</em> for x &ge; 3 (3 is included), with an arrow showing the direction."
          ],
          graphs: [{"type":"row","items":[{"type":"numberLine","min":-2,"max":8,"step":1,"width":340,"height":70,"intervals":[{"from":3,"toInf":true,"fromOpen":true,"color":"#0ea5e9"}],"caption":"x > 3 (open circle — 3 not included)"},{"type":"numberLine","min":-2,"max":8,"step":1,"width":340,"height":70,"intervals":[{"from":3,"toInf":true,"fromOpen":false,"color":"#0d9488"}],"caption":"x ≥ 3 (closed circle — 3 included)"}]}]
        },
        {
          heading: "Solving Inequalities (Same as Equations — Almost)",
          paragraphs: [
            "You solve inequalities with the same steps as equations: add, subtract, multiply, divide to isolate the variable.",
            "<strong>Critical rule:</strong> When you <strong>multiply or divide both sides by a negative number</strong>, you must <strong>flip the inequality sign</strong>. This is the one big difference from solving equations.",
            "Why? Think about it: 2 &lt; 5 is true. Multiply both sides by &minus;1: &minus;2 and &minus;5. Now &minus;2 &gt; &minus;5. The direction reversed!"
          ],
          example: {
            title: "Worked Example: Solving an Inequality",
            problem: "Solve: &minus;3x + 7 &le; 22.",
            steps: [
              "Subtract 7 from both sides: &minus;3x &le; 15.",
              "Divide both sides by &minus;3. Since we are dividing by a negative, <strong>flip the sign</strong>.",
              "x &ge; &minus;5.",
              "Solution set: all numbers greater than or equal to &minus;5. On a number line: filled circle at &minus;5 with arrow pointing right."
            ],
              graphs: [{"type":"numberLine","min":-8,"max":4,"step":1,"width":480,"height":70,"intervals":[{"from":-5,"toInf":true,"fromOpen":false,"color":"#0d9488"}],"caption":"x ≥ −5: filled circle at −5, arrow pointing right"}]
           },
           practice: [
             {
               type: "type-answer",
               prompt: "Solve: 3x + 4 &gt; 19. Write the solution (e.g. x>5).",
               answer: "x>5",
               accept: ["x>5", "x > 5", "x &gt; 5"],
               explanation: "Subtract 4: 3x &gt; 15. Divide by 3: x &gt; 5."
             },
             {
               type: "type-answer",
               prompt: "Solve: &minus;2x &lt; 10. Write the solution (e.g. x>-5).",
               answer: "x>-5",
               accept: ["x>-5", "x > -5", "x &gt; -5", "x > −5"],
               explanation: "Divide by &minus;2 and flip the sign: x &gt; &minus;5."
             },
             {
               type: "multiple-quick",
               prompt: "When solving &minus;4x &ge; 12, what happens to the inequality sign?",
               options: ["It stays the same", "It flips direction", "It becomes an equals sign"],
               correct: 1,
               explanation: "Dividing (or multiplying) both sides by a negative number flips the inequality sign."
             }
           ]
         },
         {
           heading: "Multi-Step Inequalities",
          paragraphs: [
            "Multi-step inequalities work the same as multi-step equations. Distribute, combine like terms, then isolate the variable. Just remember the sign-flip rule.",
            "Example: 2(x + 3) &minus; 5 &lt; 9. Distribute: 2x + 6 &minus; 5 &lt; 9. Simplify: 2x + 1 &lt; 9. Subtract 1: 2x &lt; 8. Divide by 2: x &lt; 4.",
            "With variables on both sides: 5x &minus; 3 &gt; 2x + 9 &rArr; 3x &gt; 12 &rArr; x &gt; 4."
           ],
           graphs: [{"type":"row","items":[{"type":"numberLine","min":-2,"max":8,"step":1,"width":340,"height":70,"intervals":[{"to":4,"fromInf":true,"toOpen":true,"color":"#3b82f6"}],"caption":"x < 4 (open circle at 4, shade left)"},{"type":"numberLine","min":-2,"max":8,"step":1,"width":340,"height":70,"intervals":[{"from":4,"toInf":true,"fromOpen":true,"color":"#e53e3e"}],"caption":"x > 4 (open circle at 4, shade right)"}]}]
         },
        {
          heading: "Writing Solutions in Interval Notation",
          paragraphs: [
            "<strong>Interval notation</strong> is a compact way to write solution sets. Use parentheses ( ) for strict inequalities and brackets [ ] for &le; or &ge;.",
            "x &gt; 3 is written as (3, &infin;). x &le; &minus;2 is written as (&minus;&infin;, &minus;2].",
            "The symbol &infin; (infinity) always gets a parenthesis, never a bracket — you can approach infinity but never reach it."
          ],
          graphs: [{"type":"row","items":[{"type":"numberLine","min":-2,"max":8,"step":1,"width":340,"height":70,"intervals":[{"from":3,"toInf":true,"fromOpen":true,"color":"#e53e3e"}],"caption":"x > 3 → (3, ∞)"},{"type":"numberLine","min":-6,"max":4,"step":1,"width":340,"height":70,"intervals":[{"to":-2,"fromInf":true,"toOpen":false,"color":"#3b82f6"}],"caption":"x ≤ −2 → (−∞, −2]"}]}]
        }
      ]
    },
    quiz: [
      {
        id: "d5q1", question: "Solve: x + 5 &gt; 12.",
        type: "multiple-choice",
        options: ["x &gt; 7","x &gt; 17","x &lt; 7","x &ge; 7"],
        correct: 0,
        explanation: "Subtract 5: x &gt; 12 &minus; 5 = <strong>7</strong>.",
        difficulty: "easy", category: "topic",
        graph: {"type":"numberLine","min":3,"max":11,"step":1,"width":400,"height":60,"intervals":[{"from":7,"toInf":true,"fromOpen":true,"color":"#0ea5e9"}],"caption":"x > 7"}
      },
      {
        id: "d5q2", question: "Solve: 3x &le; 21.",
        type: "multiple-choice",
        options: ["x &le; 7","x &ge; 7","x &lt; 7","x &le; 18"],
        correct: 0,
        explanation: "Divide by 3: x &le; <strong>7</strong>.",
        difficulty: "easy", category: "topic",
        graph: {"type":"numberLine","min":3,"max":11,"step":1,"width":400,"height":60,"intervals":[{"to":7,"fromInf":true,"toOpen":false,"color":"#0d9488"}],"caption":"x ≤ 7"}
      },
      {
        id: "d5q3", question: "What does an <em>open circle</em> on a number line graph mean?",
        type: "multiple-choice",
        options: ["The endpoint is NOT included","The endpoint IS included","There is no solution","The variable equals that number"],
        correct: 0,
        explanation: "An open circle means the value at that point is <strong>not included</strong> in the solution (&lt; or &gt;, not &le; or &ge;).",
        difficulty: "easy", category: "topic",
        graph: {"type":"numberLine","min":0,"max":8,"step":1,"width":400,"height":60,"points":[{"x":4,"open":true,"color":"#e53e3e"}],"intervals":[{"from":4,"toInf":true,"fromOpen":true,"color":"#e53e3e"}]}
      },
      {
        id: "d5q4", question: "Solve: &minus;4x &gt; 20.",
        type: "multiple-choice",
        options: ["x &lt; &minus;5","x &gt; &minus;5","x &lt; 5","x &gt; 5"],
        correct: 0,
        explanation: "Divide by &minus;4 and <strong>flip the sign</strong>: x &lt; &minus;5.",
        difficulty: "medium", category: "topic",
        hints: ["When you divide or multiply both sides of an inequality by a negative number, something special happens to the sign.", "Divide both sides by &minus;4, and remember to flip the inequality sign."],
        graph: {"type":"numberLine","min":-9,"max":-1,"step":1,"width":400,"height":60,"intervals":[{"to":-5,"fromInf":true,"toOpen":true,"color":"#e53e3e"}],"caption":"x < −5"}
      },
      {
        id: "d5q5", question: "Solve: 2x + 9 &lt; 3.",
        type: "multiple-choice",
        options: ["x &lt; &minus;3","x &lt; 6","x &gt; &minus;3","x &lt; 3"],
        correct: 0,
        explanation: "Subtract 9: 2x &lt; &minus;6. Divide by 2: x &lt; <strong>&minus;3</strong>.",
        difficulty: "medium", category: "topic",
        hints: ["Solve this like a two-step equation: undo the addition first, then the multiplication.", "Start by subtracting 9 from both sides."],
        graph: {"type":"numberLine","min":-7,"max":1,"step":1,"width":400,"height":60,"intervals":[{"to":-3,"fromInf":true,"toOpen":true,"color":"#e53e3e"}],"caption":"x < −3"}
      },
      {
        id: "d5q6", question: "Which interval notation represents x &ge; &minus;4?",
        type: "multiple-choice",
        options: ["[&minus;4, &infin;)","(&minus;4, &infin;)","(&minus;&infin;, &minus;4]","[&minus;&infin;, &minus;4]"],
        correct: 0,
        explanation: "x &ge; &minus;4 includes &minus;4 (bracket) and goes to infinity (parenthesis): <strong>[&minus;4, &infin;)</strong>.",
        difficulty: "medium", category: "topic",
        hints: ["Use a bracket [ when the endpoint IS included (&ge; or &le;) and a parenthesis ( when it is NOT.", "Since &minus;4 is included (&ge;), it gets a bracket. Infinity always gets a parenthesis."],
        graph: {"type":"numberLine","min":-8,"max":2,"step":1,"width":400,"height":60,"intervals":[{"from":-4,"toInf":true,"fromOpen":false,"color":"#0ea5e9"}],"caption":"x ≥ −4"}
      },
      {
        id: "d5q7", question: "Solve: 5 &minus; 3(x &minus; 2) &ge; 20.",
        type: "multiple-choice",
        options: ["x &le; &minus;3","x &ge; &minus;3","x &le; 3","x &ge; 3"],
        correct: 0,
        explanation: "Distribute: 5 &minus; 3x + 6 &ge; 20. Simplify: 11 &minus; 3x &ge; 20. Subtract 11: &minus;3x &ge; 9. Divide by &minus;3 (flip!): x &le; <strong>&minus;3</strong>.",
        difficulty: "hard", category: "topic",
        hints: ["Distribute the &minus;3 first, being careful with signs, then combine the constant terms.", "After simplifying to &minus;3x &ge; 9, remember to flip the inequality when dividing by a negative."],
        graph: {"type":"numberLine","min":-7,"max":3,"step":1,"width":400,"height":60,"intervals":[{"to":-3,"fromInf":true,"toOpen":false,"color":"#0d9488"}],"caption":"Solution: x ≤ −3"}
      },
      {
        id: "d5q8", question: "Solve: 4x &minus; 1 &gt; 2x + 7.",
        type: "multiple-choice",
        options: ["x &gt; 4","x &gt; 3","x &lt; 4","x &gt; 8"],
        correct: 0,
        explanation: "Subtract 2x: 2x &minus; 1 &gt; 7. Add 1: 2x &gt; 8. Divide by 2: x &gt; <strong>4</strong>.",
        difficulty: "hard", category: "topic",
        hints: ["Move all variable terms to one side, just like solving an equation with variables on both sides.", "Subtract 2x from both sides to get the x-terms on the left, then isolate x."],
        graph: {"type":"numberLine","min":0,"max":8,"step":1,"width":400,"height":60,"intervals":[{"from":4,"toInf":true,"fromOpen":true,"color":"#0ea5e9"}],"caption":"x > 4"}
      },
      {
        id: "d5q9", question: "The sum of three consecutive even integers is 78. What is the smallest? (Review: Day 4)",
        type: "multiple-choice",
        options: ["24","26","22","28"],
        correct: 0,
        explanation: "n + (n+2) + (n+4) = 78. 3n + 6 = 78. 3n = 72. n = <strong>24</strong>.",
        difficulty: "medium", category: "review",
        hints: ["Consecutive even integers differ by 2: write them as n, n+2, and n+4.", "Set up the equation n + (n+2) + (n+4) = 78, then combine like terms."]
      },
      {
        id: "d5q10", question: "Solve: 4(x &minus; 1) = 2x + 6. (Review: Day 3)",
        type: "multiple-choice",
        options: ["x = 5","x = 3","x = 1","x = 10"],
        correct: 0,
        explanation: "4x &minus; 4 = 2x + 6. Subtract 2x: 2x &minus; 4 = 6. Add 4: 2x = 10. x = <strong>5</strong>.",
        difficulty: "medium", category: "review",
        hints: ["Distribute the 4 on the left, then collect x-terms on one side.", "After distributing, subtract 2x from both sides to get the x-terms together."]
      }
    ]
  },
  day6: {
    lesson: {
      title: "Compound Inequalities & Absolute Value",
      subtitle: "Combining inequality conditions and understanding distance from zero.",
      sections: [
        {
          heading: "Compound Inequalities: AND",
          paragraphs: [
            "A <strong>compound inequality</strong> joins two inequalities. An <strong>AND</strong> compound means both conditions must be true at the same time.",
            "Example: &minus;2 &lt; x &le; 5 means x is greater than &minus;2 <em>and</em> at most 5. The solution is the <strong>overlap</strong> of the two conditions.",
            "On a number line, AND creates a <strong>segment</strong> (a bounded region). In interval notation: (&minus;2, 5]."
          ],
          example: {
            title: "Worked Example: AND Inequality",
            problem: "Solve: &minus;3 &le; 2x + 1 &lt; 9.",
            steps: [
              "This is a compound inequality. Solve both parts simultaneously by doing the same operation to all three sections.",
              "Subtract 1 from all parts: &minus;4 &le; 2x &lt; 8.",
              "Divide all parts by 2: &minus;2 &le; x &lt; 4.",
              "Solution: [&minus;2, 4). x is at least &minus;2 but strictly less than 4."
            ],
            graphs: [{"type":"numberLine","min":-5,"max":7,"step":1,"width":480,"height":70,"intervals":[{"from":-2,"to":4,"fromOpen":false,"toOpen":true,"color":"#0ea5e9"}],"caption":"[−2, 4): closed at −2, open at 4"}]
          }
        },
        {
          heading: "Compound Inequalities: OR",
          paragraphs: [
            "An <strong>OR</strong> compound means <em>at least one</em> condition must be true. The solution is the <strong>union</strong> of both solution sets.",
            "Example: x &lt; &minus;1 OR x &gt; 3. On the number line, this is two separate rays going in opposite directions.",
            "In interval notation: (&minus;&infin;, &minus;1) &cup; (3, &infin;). The &cup; symbol means &ldquo;union&rdquo; (combine the sets)."
          ],
          graphs: [{"type":"numberLine","min":-5,"max":7,"step":1,"width":480,"height":70,"intervals":[{"to":-1,"fromInf":true,"toOpen":true,"color":"#e53e3e"},{"from":3,"toInf":true,"fromOpen":true,"color":"#e53e3e"}],"caption":"x < −1 OR x > 3: two rays pointing away from each other"}]
        },
        {
          heading: "Absolute Value Equations",
          paragraphs: [
            "The <strong>absolute value</strong> |a| gives the distance of a from 0 on the number line. It&rsquo;s always non-negative.",
            "To solve |expression| = k (where k &ge; 0), create <strong>two cases</strong>: expression = k OR expression = &minus;k.",
            "Example: |x &minus; 3| = 7 gives x &minus; 3 = 7 or x &minus; 3 = &minus;7, so x = 10 or x = &minus;4. If k &lt; 0, there is <strong>no solution</strong> (distance can&rsquo;t be negative)."
          ],
          graphs: [{"type":"numberLine","min":-7,"max":13,"step":2,"width":480,"height":70,"points":[{"x":-4,"open":false,"color":"#e53e3e","label":"−4"},{"x":10,"open":false,"color":"#e53e3e","label":"10"},{"x":3,"open":false,"color":"#0ea5e9","label":"3"}],"caption":"|x − 3| = 7: solutions at x = −4 and x = 10, both 7 units from 3"}],
          example: {
            title: "Worked Example: Absolute Value Equation",
            problem: "Solve: |2x + 5| = 11.",
            steps: [
              "Set up two cases: 2x + 5 = 11 or 2x + 5 = &minus;11.",
              "Case 1: 2x = 6, so x = 3.",
              "Case 2: 2x = &minus;16, so x = &minus;8.",
               "Solutions: x = <strong>3</strong> or x = <strong>&minus;8</strong>. Check both in the original equation."
             ]
           },
           practice: [
             {
               type: "type-answer",
               prompt: "Solve |x &minus; 1| = 5. Write both solutions separated by a comma (smaller first).",
               answer: "-4, 6",
               accept: ["-4, 6", "-4,6", "x=-4, x=6", "-4 and 6"],
               explanation: "Case 1: x &minus; 1 = 5, so x = 6. Case 2: x &minus; 1 = &minus;5, so x = &minus;4."
             },
             {
               type: "type-answer",
               prompt: "Solve |2x| = 10. What is the positive solution?",
               answer: "5",
               accept: ["5", "x=5", "x = 5"],
               explanation: "Case 1: 2x = 10, so x = 5. Case 2: 2x = &minus;10, so x = &minus;5. The positive solution is 5."
             },
             {
               type: "multiple-quick",
               prompt: "How many solutions does |x + 3| = &minus;2 have?",
               options: ["None", "One", "Two"],
               correct: 0,
               explanation: "Absolute value is always &ge; 0, so it can never equal a negative number. No solution."
             }
           ]
         },
         {
           heading: "Absolute Value Inequalities",
          paragraphs: [
            "For <strong>|expression| &lt; k</strong>: this means the expression is within k units of 0. Rewrite as a compound AND: &minus;k &lt; expression &lt; k.",
            "For <strong>|expression| &gt; k</strong>: the expression is more than k units from 0. Rewrite as compound OR: expression &lt; &minus;k OR expression &gt; k.",
            "Memory aid: &ldquo;Less thAND&rdquo; (less than &rarr; AND compound). &ldquo;GrOR&rdquo; or &ldquo;greatOR&rdquo; (greater than &rarr; OR compound)."
          ],
          graphs: [{"type":"row","items":[{"type":"numberLine","min":-6,"max":6,"step":1,"width":340,"height":70,"intervals":[{"from":-3,"to":3,"fromOpen":true,"toOpen":true,"color":"#0ea5e9"}],"caption":"|x| < 3 → AND: −3 < x < 3"},{"type":"numberLine","min":-6,"max":6,"step":1,"width":340,"height":70,"intervals":[{"to":-3,"fromInf":true,"toOpen":true,"color":"#e53e3e"},{"from":3,"toInf":true,"fromOpen":true,"color":"#e53e3e"}],"caption":"|x| > 3 → OR: x < −3 or x > 3"}]}]
        }
      ]
    },
    quiz: [
      {
        id: "d6q1", question: "Solve: |x| = 9.",
        type: "multiple-choice",
        options: ["x = 9 or x = &minus;9","x = 9","x = &minus;9","No solution"],
        correct: 0,
        explanation: "Absolute value equals 9 means x is 9 units from 0: x = <strong>9 or &minus;9</strong>.",
        difficulty: "easy", category: "topic",
        graph: {"type":"numberLine","min":-12,"max":12,"step":3,"width":440,"height":60,"points":[{"x":-9,"open":false,"color":"#e53e3e","label":"−9"},{"x":9,"open":false,"color":"#e53e3e","label":"9"},{"x":0,"open":false,"color":"#a0aec0","label":"0"}],"caption":"Two solutions: 9 units from zero in each direction"}
      },
      {
        id: "d6q2", question: "Solve: &minus;1 &lt; x + 3 &le; 7.",
        type: "multiple-choice",
        options: ["&minus;4 &lt; x &le; 4","&minus;4 &le; x &lt; 4","2 &lt; x &le; 10","&minus;1 &lt; x &le; 7"],
        correct: 0,
        explanation: "Subtract 3 from all parts: &minus;1 &minus; 3 &lt; x &le; 7 &minus; 3, so <strong>&minus;4 &lt; x &le; 4</strong>.",
        difficulty: "easy", category: "topic",
        graph: {"type":"numberLine","min":-7,"max":7,"step":1,"width":440,"height":60,"intervals":[{"from":-4,"to":4,"fromOpen":true,"toOpen":false,"color":"#0ea5e9"}],"caption":"−4 < x ≤ 4"}
      },
      {
        id: "d6q3", question: "Which describes an OR compound inequality on a number line?",
        type: "multiple-choice",
        options: ["Two separate rays pointing away from each other","A single segment between two points","A single ray in one direction","A single point"],
        correct: 0,
        explanation: "An OR compound (like x &lt; &minus;1 or x &gt; 3) creates <strong>two separate rays</strong> on the number line.",
        difficulty: "easy", category: "topic",
        graph: {"type":"numberLine","min":-5,"max":7,"step":1,"width":400,"height":60,"intervals":[{"to":-1,"fromInf":true,"toOpen":true,"color":"#e53e3e"},{"from":3,"toInf":true,"fromOpen":true,"color":"#e53e3e"}]}
      },
      {
        id: "d6q4", question: "Solve: |x &minus; 4| = 6.",
        type: "multiple-choice",
        options: ["x = 10 or x = &minus;2","x = 10","x = 2 or x = &minus;10","x = &minus;2"],
        correct: 0,
        explanation: "x &minus; 4 = 6 gives x = 10. x &minus; 4 = &minus;6 gives x = &minus;2. Solutions: <strong>10 or &minus;2</strong>.",
        difficulty: "medium", category: "topic",
        hints: ["Absolute value equations always produce two cases: the expression equals +k or &minus;k.", "Set up x &minus; 4 = 6 and x &minus; 4 = &minus;6, then solve each one-step equation."],
        graph: {"type":"numberLine","min":-5,"max":13,"step":2,"width":440,"height":60,"points":[{"x":-2,"open":false,"color":"#e53e3e","label":"−2"},{"x":10,"open":false,"color":"#e53e3e","label":"10"},{"x":4,"open":false,"color":"#0ea5e9","label":"4"}],"caption":"Both solutions are 6 units from 4"}
      },
      {
        id: "d6q5", question: "Solve: |3x + 1| &lt; 7.",
        type: "multiple-choice",
        options: ["&minus;8/3 &lt; x &lt; 2","x &lt; 2","x &gt; &minus;8/3","&minus;2 &lt; x &lt; 8/3"],
        correct: 0,
        explanation: "Rewrite as AND: &minus;7 &lt; 3x + 1 &lt; 7. Subtract 1: &minus;8 &lt; 3x &lt; 6. Divide by 3: <strong>&minus;8/3 &lt; x &lt; 2</strong>.",
        difficulty: "medium", category: "topic",
        hints: ["&ldquo;Less thAND&rdquo; &mdash; an absolute value less-than becomes a compound AND inequality.", "Rewrite as &minus;7 &lt; 3x + 1 &lt; 7, then solve by subtracting 1 from all three parts."],
        graph: {"type":"numberLine","min":-5,"max":5,"step":1,"width":400,"height":60,"intervals":[{"from":-2.67,"to":2,"fromOpen":true,"toOpen":true,"color":"#0ea5e9"}],"caption":"−8/3 < x < 2"}
      },
      {
        id: "d6q6", question: "Solve: |2x &minus; 3| &ge; 5.",
        type: "multiple-choice",
        options: ["x &le; &minus;1 or x &ge; 4","&minus;1 &le; x &le; 4","x &ge; 4","x &le; &minus;1"],
        correct: 0,
        explanation: "Greater than or equal &rarr; OR compound. 2x &minus; 3 &ge; 5 gives x &ge; 4. 2x &minus; 3 &le; &minus;5 gives x &le; &minus;1. Solution: <strong>x &le; &minus;1 or x &ge; 4</strong>.",
        difficulty: "medium", category: "topic",
        hints: ["&ldquo;GreatOR&rdquo; &mdash; an absolute value greater-than becomes a compound OR inequality.", "Split into two cases: 2x &minus; 3 &ge; 5 OR 2x &minus; 3 &le; &minus;5, and solve each."],
        graph: {"type":"numberLine","min":-4,"max":7,"step":1,"width":400,"height":60,"intervals":[{"to":-1,"fromInf":true,"toOpen":false,"color":"#0d9488"},{"from":4,"toInf":true,"fromOpen":false,"color":"#0d9488"}],"caption":"x ≤ −1 or x ≥ 4"}
      },
      {
        id: "d6q7", question: "Solve: |5x + 2| = &minus;3.",
        type: "multiple-choice",
        options: ["No solution","x = &minus;1 or x = 1/5","x = &minus;1","x = 1/5"],
        correct: 0,
        explanation: "Absolute value can never be negative. |5x + 2| = &minus;3 has <strong>no solution</strong>.",
        difficulty: "hard", category: "topic",
        hints: ["Think about what values absolute value can possibly produce.", "Absolute value measures distance from zero &mdash; can a distance ever be negative?"]
      },
      {
        id: "d6q8", question: "Solve: 2 &le; |x + 1| &le; 6.",
        type: "multiple-choice",
        options: ["&minus;7 &le; x &le; &minus;3 or 1 &le; x &le; 5","1 &le; x &le; 5","&minus;7 &le; x &le; 5","&minus;3 &le; x &le; 1"],
        correct: 0,
        explanation: "|x+1| &le; 6 gives &minus;7 &le; x &le; 5. |x+1| &ge; 2 gives x &le; &minus;3 or x &ge; 1. The intersection is <strong>&minus;7 &le; x &le; &minus;3 or 1 &le; x &le; 5</strong>.",
        difficulty: "hard", category: "topic",
        hints: ["Break this into two separate conditions: |x+1| &ge; 2 AND |x+1| &le; 6, then find where both are true.", "Solve each absolute value inequality separately, then find the overlap (intersection) of the two solution sets."],
        graph: {"type":"numberLine","min":-9,"max":7,"step":1,"width":440,"height":60,"intervals":[{"from":-7,"to":-3,"fromOpen":false,"toOpen":false,"color":"#0ea5e9"},{"from":1,"to":5,"fromOpen":false,"toOpen":false,"color":"#0ea5e9"}],"caption":"−7 ≤ x ≤ −3 or 1 ≤ x ≤ 5"}
      },
      {
        id: "d6q9", question: "Solve: &minus;2x + 1 &gt; 9. (Review: Day 5)",
        type: "multiple-choice",
        options: ["x &lt; &minus;4","x &gt; &minus;4","x &lt; 4","x &gt; 4"],
        correct: 0,
        explanation: "Subtract 1: &minus;2x &gt; 8. Divide by &minus;2 (flip!): x &lt; <strong>&minus;4</strong>.",
        difficulty: "medium", category: "review",
        hints: ["Isolate the variable term first by undoing the addition, then handle the negative coefficient.", "After subtracting 1, you will divide by a negative number &mdash; remember what that does to the inequality sign."]
      },
      {
        id: "d6q10", question: "A movie theater charges $9 per adult and $6 per child. If 15 people paid a total of $108, how many adults attended? (Review: Day 4)",
        type: "multiple-choice",
        options: ["6","9","7","8"],
        correct: 0,
        explanation: "Let a = adults. 9a + 6(15 &minus; a) = 108. 9a + 90 &minus; 6a = 108. 3a = 18. a = <strong>6</strong>.",
        difficulty: "medium", category: "review",
        hints: ["Let a = number of adults, then the number of children is 15 &minus; a.", "Write the total cost equation: 9a + 6(15 &minus; a) = 108, then distribute and solve."]
      }
    ]
  }
};
