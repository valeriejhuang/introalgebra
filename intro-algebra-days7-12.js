export const DAYS_7_12 = {  day7: {
    lesson: {
      title: "Exponents & Their Laws",
      subtitle: "Repeated multiplication made compact — master the rules that power algebra.",
      sections: [
        {
          heading: "What Is an Exponent?",
          paragraphs: [
            "An <strong>exponent</strong> (or power) tells you how many times to use a number as a factor. In <strong>x<sup>n</sup></strong>, x is the <strong>base</strong> and n is the <strong>exponent</strong>.",
            "For example, 2<sup>5</sup> = 2 &times; 2 &times; 2 &times; 2 &times; 2 = 32. The base 2 is used as a factor 5 times.",
            "Be careful with negative bases: (&minus;3)<sup>2</sup> = 9, but &minus;3<sup>2</sup> = &minus;9. The parentheses make all the difference!"
          ]
        },
        {
          heading: "Product Rule & Quotient Rule",
          paragraphs: [
            "<strong>Product Rule:</strong> When multiplying powers with the <em>same base</em>, <strong>add</strong> the exponents: x<sup>a</sup> &middot; x<sup>b</sup> = x<sup>a+b</sup>.",
            "<strong>Quotient Rule:</strong> When dividing powers with the same base, <strong>subtract</strong> the exponents: x<sup>a</sup> / x<sup>b</sup> = x<sup>a&minus;b</sup>.",
            "Example: 5<sup>3</sup> &middot; 5<sup>4</sup> = 5<sup>7</sup>. And 7<sup>8</sup> / 7<sup>3</sup> = 7<sup>5</sup>. The base must be the same for these rules to apply!"
          ],
          example: {
            title: "Worked Example: Product Rule",
            problem: "Simplify: x<sup>3</sup> &middot; x<sup>5</sup> &middot; x<sup>2</sup>.",
            steps: [
              "All bases are x, so add the exponents: 3 + 5 + 2 = 10.",
              "Result: <strong>x<sup>10</sup></strong>."
            ]
          }
        },
        {
          heading: "Power Rule & Power of a Product",
          paragraphs: [
            "<strong>Power Rule:</strong> Raising a power to another power &mdash; <strong>multiply</strong> the exponents: (x<sup>a</sup>)<sup>b</sup> = x<sup>ab</sup>.",
            "<strong>Power of a Product:</strong> (xy)<sup>n</sup> = x<sup>n</sup>y<sup>n</sup>. Distribute the exponent to each factor.",
            "<strong>Power of a Quotient:</strong> (x/y)<sup>n</sup> = x<sup>n</sup>/y<sup>n</sup>."
          ],
          example: {
            title: "Worked Example: Power Rule",
            problem: "Simplify: (2x<sup>3</sup>)<sup>4</sup>.",
            steps: [
              "Apply the power to each factor: 2<sup>4</sup> &middot; (x<sup>3</sup>)<sup>4</sup>.",
              "2<sup>4</sup> = 16. For the x part, multiply exponents: x<sup>12</sup>.",
              "Result: <strong>16x<sup>12</sup></strong>."
            ]
          }
        },
        {
          heading: "Zero Exponent",
          paragraphs: [
            "Any non-zero base raised to the power 0 equals <strong>1</strong>: x<sup>0</sup> = 1 (as long as x &ne; 0).",
            "Why? Consider: x<sup>3</sup> / x<sup>3</sup> = x<sup>3&minus;3</sup> = x<sup>0</sup>. But x<sup>3</sup>/x<sup>3</sup> is also 1 (anything divided by itself is 1). So x<sup>0</sup> = 1.",
            "Example: 5<sup>0</sup> = 1. (&minus;7)<sup>0</sup> = 1. (2x)<sup>0</sup> = 1 (if x &ne; 0)."
          ]
        }
      ]
    },
    quiz: [
      {
        id: "d7q1", question: "Simplify: x<sup>4</sup> &middot; x<sup>6</sup>.",
        type: "multiple-choice",
        options: ["x<sup>10</sup>","x<sup>24</sup>","2x<sup>10</sup>","x<sup>2</sup>"],
        correct: 0,
        explanation: "Same base, add exponents: 4 + 6 = 10. Answer: <strong>x<sup>10</sup></strong>.",
        difficulty: "easy", category: "topic"
      },
      {
        id: "d7q2", question: "What is 8<sup>0</sup>?",
        type: "multiple-choice",
        options: ["1","8","0","Undefined"],
        correct: 0,
        explanation: "Any non-zero number raised to the 0 power equals <strong>1</strong>.",
        difficulty: "easy", category: "topic"
      },
      {
        id: "d7q3", question: "Simplify: y<sup>9</sup> / y<sup>4</sup>.",
        type: "multiple-choice",
        options: ["y<sup>5</sup>","y<sup>13</sup>","y<sup>36</sup>","y<sup>&minus;5</sup>"],
        correct: 0,
        explanation: "Quotient rule: 9 &minus; 4 = 5. Answer: <strong>y<sup>5</sup></strong>.",
        difficulty: "easy", category: "topic"
      },
      {
        id: "d7q4", question: "Simplify: (x<sup>2</sup>)<sup>5</sup>.",
        type: "multiple-choice",
        options: ["x<sup>10</sup>","x<sup>7</sup>","x<sup>25</sup>","5x<sup>2</sup>"],
        correct: 0,
        explanation: "Power rule: multiply exponents: 2 &times; 5 = 10. Answer: <strong>x<sup>10</sup></strong>.",
        difficulty: "medium", category: "topic"
      },
      {
        id: "d7q5", question: "Simplify: (3a<sup>2</sup>)<sup>3</sup>.",
        type: "multiple-choice",
        options: ["27a<sup>6</sup>","9a<sup>6</sup>","27a<sup>5</sup>","3a<sup>6</sup>"],
        correct: 0,
        explanation: "3<sup>3</sup> = 27. (a<sup>2</sup>)<sup>3</sup> = a<sup>6</sup>. Result: <strong>27a<sup>6</sup></strong>.",
        difficulty: "medium", category: "topic"
      },
      {
        id: "d7q6", question: "Simplify: (x<sup>5</sup> &middot; x<sup>3</sup>) / x<sup>2</sup>.",
        type: "multiple-choice",
        options: ["x<sup>6</sup>","x<sup>10</sup>","x<sup>0</sup>","x<sup>8</sup>"],
        correct: 0,
        explanation: "Numerator: x<sup>5+3</sup> = x<sup>8</sup>. Then x<sup>8</sup>/x<sup>2</sup> = x<sup>6</sup>.",
        difficulty: "medium", category: "topic"
      },
      {
        id: "d7q7", question: "Simplify: (2x<sup>2</sup>y)<sup>3</sup> &middot; x.",
        type: "multiple-choice",
        options: ["8x<sup>7</sup>y<sup>3</sup>","6x<sup>7</sup>y<sup>3</sup>","8x<sup>6</sup>y<sup>3</sup>","2x<sup>7</sup>y<sup>3</sup>"],
        correct: 0,
        explanation: "(2x<sup>2</sup>y)<sup>3</sup> = 8x<sup>6</sup>y<sup>3</sup>. Then &middot; x = 8x<sup>7</sup>y<sup>3</sup>.",
        difficulty: "hard", category: "topic"
      },
      {
        id: "d7q8", question: "Which is equivalent to (&minus;2)<sup>4</sup>?",
        type: "multiple-choice",
        options: ["16","&minus;16","&minus;8","8"],
        correct: 0,
        explanation: "(&minus;2)<sup>4</sup> = (&minus;2)(&minus;2)(&minus;2)(&minus;2) = 4 &times; 4 = <strong>16</strong>. Even exponent makes a positive result.",
        difficulty: "hard", category: "topic"
      },
      {
        id: "d7q9", question: "Solve: |x &minus; 5| = 8. (Review: Day 6)",
        type: "multiple-choice",
        options: ["x = 13 or x = &minus;3","x = 13","x = &minus;3","x = 3 or x = &minus;13"],
        correct: 0,
        explanation: "x &minus; 5 = 8 gives x = 13. x &minus; 5 = &minus;8 gives x = &minus;3. Both are solutions.",
        difficulty: "medium", category: "review"
      },
      {
        id: "d7q10", question: "Solve: 3 &minus; 5x &ge; 18. (Review: Day 5)",
        type: "multiple-choice",
        options: ["x &le; &minus;3","x &ge; &minus;3","x &le; 3","x &ge; 3"],
        correct: 0,
        explanation: "Subtract 3: &minus;5x &ge; 15. Divide by &minus;5 (flip!): x &le; <strong>&minus;3</strong>.",
        difficulty: "medium", category: "review"
      }
    ]
  },
  day8: {
    lesson: {
      title: "Negative Exponents & Scientific Notation",
      subtitle: "Handling very large and very small numbers with elegance.",
      sections: [
        {
          heading: "Negative Exponents",
          paragraphs: [
            "A <strong>negative exponent</strong> means &ldquo;take the reciprocal.&rdquo; In general: x<sup>&minus;n</sup> = 1/x<sup>n</sup>.",
            "Think of it this way: as exponents decrease by 1, you divide by the base. 2<sup>3</sup> = 8, 2<sup>2</sup> = 4, 2<sup>1</sup> = 2, 2<sup>0</sup> = 1, 2<sup>&minus;1</sup> = 1/2, 2<sup>&minus;2</sup> = 1/4.",
            "If a negative exponent is in the denominator, move it to the numerator: 1/x<sup>&minus;n</sup> = x<sup>n</sup>. Negative exponents &ldquo;flip&rdquo; between top and bottom."
          ],
          example: {
            title: "Worked Example: Negative Exponents",
            problem: "Simplify: 3x<sup>&minus;2</sup> / y<sup>&minus;4</sup>.",
            steps: [
              "x<sup>&minus;2</sup> in the numerator moves to the denominator as x<sup>2</sup>.",
              "y<sup>&minus;4</sup> in the denominator moves to the numerator as y<sup>4</sup>.",
              "Result: <strong>3y<sup>4</sup> / x<sup>2</sup></strong>."
            ]
          }
        },
        {
          heading: "Simplifying with Mixed Exponents",
          paragraphs: [
            "All the exponent laws from Day 7 still apply with negative exponents. Product rule: x<sup>&minus;2</sup> &middot; x<sup>5</sup> = x<sup>3</sup>.",
            "Power rule: (x<sup>&minus;3</sup>)<sup>2</sup> = x<sup>&minus;6</sup> = 1/x<sup>6</sup>.",
            "Final answers should have <strong>only positive exponents</strong> unless stated otherwise."
          ]
        },
        {
          heading: "Scientific Notation",
          paragraphs: [
            "<strong>Scientific notation</strong> writes a number as a &times; 10<sup>n</sup>, where 1 &le; |a| &lt; 10 and n is an integer.",
            "Large numbers use <strong>positive</strong> exponents: 45,000,000 = 4.5 &times; 10<sup>7</sup>. Small numbers use <strong>negative</strong> exponents: 0.00032 = 3.2 &times; 10<sup>&minus;4</sup>.",
            "To convert: count how many places you move the decimal to get a number between 1 and 10. That count is your exponent. Moving left = positive, moving right = negative."
          ],
          example: {
            title: "Worked Example: Writing in Scientific Notation",
            problem: "Write 0.0000067 in scientific notation.",
            steps: [
              "Move the decimal right until you get a number between 1 and 10: 6.7.",
              "Count the places moved: 6 places to the right.",
              "Since the original number is small (less than 1), the exponent is negative.",
              "Answer: <strong>6.7 &times; 10<sup>&minus;6</sup></strong>."
            ]
          }
        },
        {
          heading: "Operations with Scientific Notation",
          paragraphs: [
            "<strong>Multiplying:</strong> Multiply the coefficients and add the exponents. (3 &times; 10<sup>4</sup>)(2 &times; 10<sup>5</sup>) = 6 &times; 10<sup>9</sup>.",
            "<strong>Dividing:</strong> Divide the coefficients and subtract the exponents. (8 &times; 10<sup>7</sup>) / (4 &times; 10<sup>3</sup>) = 2 &times; 10<sup>4</sup>.",
            "If the coefficient falls outside [1, 10), adjust. For example, 15 &times; 10<sup>3</sup> = 1.5 &times; 10<sup>4</sup>."
          ]
        }
      ]
    },
    quiz: [
      {
        id: "d8q1", question: "Simplify: 5<sup>&minus;2</sup>.",
        type: "multiple-choice",
        options: ["1/25","&minus;25","&minus;10","25"],
        correct: 0,
        explanation: "5<sup>&minus;2</sup> = 1/5<sup>2</sup> = <strong>1/25</strong>.",
        difficulty: "easy", category: "topic"
      },
      {
        id: "d8q2", question: "Write 3,200,000 in scientific notation.",
        type: "multiple-choice",
        options: ["3.2 &times; 10<sup>6</sup>","32 &times; 10<sup>5</sup>","3.2 &times; 10<sup>7</sup>","0.32 &times; 10<sup>7</sup>"],
        correct: 0,
        explanation: "Move decimal 6 places left: 3.2. Answer: <strong>3.2 &times; 10<sup>6</sup></strong>.",
        difficulty: "easy", category: "topic"
      },
      {
        id: "d8q3", question: "Simplify: x<sup>&minus;3</sup> &middot; x<sup>7</sup>.",
        type: "multiple-choice",
        options: ["x<sup>4</sup>","x<sup>&minus;4</sup>","x<sup>10</sup>","x<sup>&minus;21</sup>"],
        correct: 0,
        explanation: "Add exponents: &minus;3 + 7 = 4. Answer: <strong>x<sup>4</sup></strong>.",
        difficulty: "easy", category: "topic"
      },
      {
        id: "d8q4", question: "Express with positive exponents: 4a<sup>&minus;3</sup>b<sup>2</sup>.",
        type: "multiple-choice",
        options: ["4b<sup>2</sup> / a<sup>3</sup>","4 / (a<sup>3</sup>b<sup>2</sup>)","4a<sup>3</sup>b<sup>2</sup>","4a<sup>3</sup> / b<sup>2</sup>"],
        correct: 0,
        explanation: "a<sup>&minus;3</sup> moves to denominator. b<sup>2</sup> stays. Result: <strong>4b<sup>2</sup>/a<sup>3</sup></strong>.",
        difficulty: "medium", category: "topic"
      },
      {
        id: "d8q5", question: "Compute: (4 &times; 10<sup>3</sup>) &times; (2 &times; 10<sup>5</sup>).",
        type: "multiple-choice",
        options: ["8 &times; 10<sup>8</sup>","8 &times; 10<sup>15</sup>","6 &times; 10<sup>8</sup>","8 &times; 10<sup>2</sup>"],
        correct: 0,
        explanation: "4 &times; 2 = 8. Add exponents: 3 + 5 = 8. Answer: <strong>8 &times; 10<sup>8</sup></strong>.",
        difficulty: "medium", category: "topic"
      },
      {
        id: "d8q6", question: "Write 0.00045 in scientific notation.",
        type: "multiple-choice",
        options: ["4.5 &times; 10<sup>&minus;4</sup>","4.5 &times; 10<sup>4</sup>","45 &times; 10<sup>&minus;5</sup>","4.5 &times; 10<sup>&minus;3</sup>"],
        correct: 0,
        explanation: "Move decimal 4 places right: 4.5. Small number, so negative exponent: <strong>4.5 &times; 10<sup>&minus;4</sup></strong>.",
        difficulty: "medium", category: "topic"
      },
      {
        id: "d8q7", question: "Simplify: (2<sup>&minus;3</sup> &middot; 2<sup>5</sup>)<sup>2</sup>.",
        type: "multiple-choice",
        options: ["16","4","64","1/4"],
        correct: 0,
        explanation: "Inside: 2<sup>&minus;3+5</sup> = 2<sup>2</sup>. Then (2<sup>2</sup>)<sup>2</sup> = 2<sup>4</sup> = <strong>16</strong>.",
        difficulty: "hard", category: "topic"
      },
      {
        id: "d8q8", question: "Simplify and write with positive exponents: (x<sup>2</sup>y<sup>&minus;1</sup>)<sup>&minus;3</sup>.",
        type: "multiple-choice",
        options: ["y<sup>3</sup> / x<sup>6</sup>","x<sup>6</sup>y<sup>3</sup>","x<sup>6</sup> / y<sup>3</sup>","1 / (x<sup>6</sup>y<sup>3</sup>)"],
        correct: 0,
        explanation: "Apply power: x<sup>2(&minus;3)</sup>y<sup>(&minus;1)(&minus;3)</sup> = x<sup>&minus;6</sup>y<sup>3</sup> = <strong>y<sup>3</sup>/x<sup>6</sup></strong>.",
        difficulty: "hard", category: "topic"
      },
      {
        id: "d8q9", question: "Simplify: (x<sup>3</sup>)<sup>4</sup> / x<sup>5</sup>. (Review: Day 7)",
        type: "multiple-choice",
        options: ["x<sup>7</sup>","x<sup>12</sup>","x<sup>2</sup>","x<sup>17</sup>"],
        correct: 0,
        explanation: "Numerator: x<sup>12</sup>. Then x<sup>12</sup>/x<sup>5</sup> = x<sup>7</sup>.",
        difficulty: "medium", category: "review"
      },
      {
        id: "d8q10", question: "Solve: |2x + 1| &ge; 5. (Review: Day 6)",
        type: "multiple-choice",
        options: ["x &le; &minus;3 or x &ge; 2","&minus;3 &le; x &le; 2","x &ge; 2","x &le; &minus;3"],
        correct: 0,
        explanation: "OR compound: 2x + 1 &ge; 5 gives x &ge; 2. 2x + 1 &le; &minus;5 gives x &le; &minus;3. Solution: <strong>x &le; &minus;3 or x &ge; 2</strong>.",
        difficulty: "medium", category: "review"
      }
    ]
  },
  day9: {
    lesson: {
      title: "Polynomials — Introduction",
      subtitle: "Understanding the language of polynomial expressions — terms, degree, and basic operations.",
      sections: [
        {
          heading: "What Is a Polynomial?",
          paragraphs: [
            "A <strong>polynomial</strong> is an expression made up of variables and coefficients, using only addition, subtraction, multiplication, and <em>non-negative integer</em> exponents.",
            "Examples: 3x<sup>2</sup> + 5x &minus; 7, &nbsp; 4a<sup>3</sup>b &minus; 2ab + 1, &nbsp; 8 (a constant). Non-examples: 1/x (negative exponent), &radic;x (fractional exponent).",
            "Each piece separated by + or &minus; is called a <strong>term</strong>. The polynomial 3x<sup>2</sup> + 5x &minus; 7 has three terms."
          ]
        },
        {
          heading: "Degree & Classification",
          paragraphs: [
            "The <strong>degree</strong> of a term is the sum of the exponents of its variables. The degree of 4x<sup>3</sup>y<sup>2</sup> is 3 + 2 = 5.",
            "The <strong>degree of the polynomial</strong> is the highest degree among all its terms. For 2x<sup>3</sup> &minus; x + 5, the degree is 3.",
            "Polynomials are classified by number of terms: <strong>monomial</strong> (1 term: 5x<sup>2</sup>), <strong>binomial</strong> (2 terms: x + 3), <strong>trinomial</strong> (3 terms: x<sup>2</sup> + x + 1). They are also named by degree: <strong>linear</strong> (degree 1), <strong>quadratic</strong> (degree 2), <strong>cubic</strong> (degree 3)."
          ]
        },
        {
          heading: "Adding Polynomials",
          paragraphs: [
            "To add polynomials, <strong>combine like terms</strong> &mdash; terms with the same variables and the same exponents.",
            "Write the polynomials with like terms aligned, then add the coefficients.",
            "Example: (3x<sup>2</sup> + 2x &minus; 5) + (x<sup>2</sup> &minus; 4x + 8) = (3 + 1)x<sup>2</sup> + (2 &minus; 4)x + (&minus;5 + 8) = <strong>4x<sup>2</sup> &minus; 2x + 3</strong>."
          ],
          example: {
            title: "Worked Example: Adding Polynomials",
            problem: "Add: (5a<sup>2</sup> &minus; 3a + 7) + (&minus;2a<sup>2</sup> + 6a &minus; 1).",
            steps: [
              "Group like terms: (5a<sup>2</sup> &minus; 2a<sup>2</sup>) + (&minus;3a + 6a) + (7 &minus; 1).",
              "Combine: 3a<sup>2</sup> + 3a + 6.",
              "Result: <strong>3a<sup>2</sup> + 3a + 6</strong>."
            ]
          }
        },
        {
          heading: "Subtracting Polynomials",
          paragraphs: [
            "Subtracting a polynomial means <strong>adding its opposite</strong> &mdash; distribute the negative sign (multiply every term in the second polynomial by &minus;1), then combine like terms.",
            "Example: (4x<sup>2</sup> + x) &minus; (2x<sup>2</sup> &minus; 3x + 5) = 4x<sup>2</sup> + x &minus; 2x<sup>2</sup> + 3x &minus; 5 = <strong>2x<sup>2</sup> + 4x &minus; 5</strong>.",
            "Common mistake: forgetting to distribute the negative to <em>every</em> term inside the parentheses."
          ]
        }
      ]
    },
    quiz: [
      {
        id: "d9q1", question: "What is the degree of 7x<sup>4</sup> &minus; 3x<sup>2</sup> + x?",
        type: "multiple-choice",
        options: ["4","7","3","2"],
        correct: 0,
        explanation: "The highest exponent is 4 (from 7x<sup>4</sup>), so the degree is <strong>4</strong>.",
        difficulty: "easy", category: "topic"
      },
      {
        id: "d9q2", question: "What type of polynomial is 5x &minus; 3?",
        type: "multiple-choice",
        options: ["Linear binomial","Quadratic binomial","Linear monomial","Constant"],
        correct: 0,
        explanation: "It has 2 terms (binomial) and degree 1 (linear): <strong>linear binomial</strong>.",
        difficulty: "easy", category: "topic"
      },
      {
        id: "d9q3", question: "Add: (2x + 5) + (3x &minus; 8).",
        type: "multiple-choice",
        options: ["5x &minus; 3","5x + 3","6x &minus; 3","x &minus; 3"],
        correct: 0,
        explanation: "(2x + 3x) + (5 &minus; 8) = <strong>5x &minus; 3</strong>.",
        difficulty: "easy", category: "topic"
      },
      {
        id: "d9q4", question: "Subtract: (4x<sup>2</sup> + 3x) &minus; (x<sup>2</sup> &minus; 5x + 2).",
        type: "multiple-choice",
        options: ["3x<sup>2</sup> + 8x &minus; 2","3x<sup>2</sup> &minus; 2x + 2","5x<sup>2</sup> &minus; 2x &minus; 2","3x<sup>2</sup> + 8x + 2"],
        correct: 0,
        explanation: "Distribute negative: 4x<sup>2</sup> + 3x &minus; x<sup>2</sup> + 5x &minus; 2. Combine: <strong>3x<sup>2</sup> + 8x &minus; 2</strong>.",
        difficulty: "medium", category: "topic"
      },
      {
        id: "d9q5", question: "What is the degree of the polynomial 6x<sup>2</sup>y<sup>3</sup> + 2xy &minus; 9?",
        type: "multiple-choice",
        options: ["5","3","2","6"],
        correct: 0,
        explanation: "The term 6x<sup>2</sup>y<sup>3</sup> has degree 2 + 3 = 5. The other terms have lower degrees. Polynomial degree: <strong>5</strong>.",
        difficulty: "medium", category: "topic"
      },
      {
        id: "d9q6", question: "Add: (x<sup>3</sup> &minus; 4x + 2) + (&minus;x<sup>3</sup> + 4x &minus; 7).",
        type: "multiple-choice",
        options: ["&minus;5","2x<sup>3</sup> + 9","2x<sup>3</sup> &minus; 5","&minus;8x &minus; 5"],
        correct: 0,
        explanation: "x<sup>3</sup> &minus; x<sup>3</sup> = 0. &minus;4x + 4x = 0. 2 &minus; 7 = &minus;5. Result: <strong>&minus;5</strong>.",
        difficulty: "medium", category: "topic"
      },
      {
        id: "d9q7", question: "Simplify: 3(2x<sup>2</sup> &minus; x + 4) &minus; 2(x<sup>2</sup> + 3x &minus; 1).",
        type: "multiple-choice",
        options: ["4x<sup>2</sup> &minus; 9x + 14","4x<sup>2</sup> + 3x + 14","8x<sup>2</sup> &minus; 9x + 10","4x<sup>2</sup> &minus; 9x + 10"],
        correct: 0,
        explanation: "6x<sup>2</sup> &minus; 3x + 12 &minus; 2x<sup>2</sup> &minus; 6x + 2. Combine: 4x<sup>2</sup> &minus; 9x + 14.",
        difficulty: "hard", category: "topic"
      },
      {
        id: "d9q8", question: "If P = 2x<sup>2</sup> + 5 and Q = x<sup>2</sup> &minus; 3x + 1, find 2P &minus; Q.",
        type: "multiple-choice",
        options: ["3x<sup>2</sup> + 3x + 9","5x<sup>2</sup> + 3x + 9","3x<sup>2</sup> &minus; 3x + 9","3x<sup>2</sup> + 3x + 11"],
        correct: 0,
        explanation: "2P = 4x<sup>2</sup> + 10. Q = x<sup>2</sup> &minus; 3x + 1. 2P &minus; Q = 4x<sup>2</sup> + 10 &minus; x<sup>2</sup> + 3x &minus; 1 = <strong>3x<sup>2</sup> + 3x + 9</strong>.",
        difficulty: "hard", category: "topic"
      },
      {
        id: "d9q9", question: "Simplify with positive exponents: (2x<sup>&minus;1</sup>)<sup>3</sup>. (Review: Day 8)",
        type: "multiple-choice",
        options: ["8/x<sup>3</sup>","6/x<sup>3</sup>","8x<sup>3</sup>","2/x<sup>3</sup>"],
        correct: 0,
        explanation: "2<sup>3</sup> = 8, (x<sup>&minus;1</sup>)<sup>3</sup> = x<sup>&minus;3</sup> = 1/x<sup>3</sup>. Result: <strong>8/x<sup>3</sup></strong>.",
        difficulty: "medium", category: "review"
      },
      {
        id: "d9q10", question: "Simplify: a<sup>5</sup> &middot; a<sup>&minus;2</sup> &middot; a<sup>3</sup>. (Review: Day 7)",
        type: "multiple-choice",
        options: ["a<sup>6</sup>","a<sup>10</sup>","a<sup>0</sup>","a<sup>&minus;6</sup>"],
        correct: 0,
        explanation: "Add exponents: 5 + (&minus;2) + 3 = 6. Result: <strong>a<sup>6</sup></strong>.",
        difficulty: "medium", category: "review"
      }
    ]
  },
  day10: {
    lesson: {
      title: "Multiplying Polynomials",
      subtitle: "From distribution to FOIL — expanding products of polynomials.",
      sections: [
        {
          heading: "Monomial × Polynomial",
          paragraphs: [
            "To multiply a monomial by a polynomial, use the <strong>distributive property</strong>: multiply the monomial by each term in the polynomial.",
            "Example: 3x(2x<sup>2</sup> &minus; 5x + 4) = 6x<sup>3</sup> &minus; 15x<sup>2</sup> + 12x.",
            "Remember to multiply both the coefficients and add the exponents of like bases."
          ]
        },
        {
          heading: "Binomial × Binomial: FOIL",
          paragraphs: [
            "When multiplying two binomials, use <strong>FOIL</strong>: <strong>F</strong>irst, <strong>O</strong>uter, <strong>I</strong>nner, <strong>L</strong>ast.",
            "(a + b)(c + d) = ac + ad + bc + bd. Then combine any like terms.",
            "Example: (x + 3)(x &minus; 5) = x<sup>2</sup> &minus; 5x + 3x &minus; 15 = <strong>x<sup>2</sup> &minus; 2x &minus; 15</strong>."
          ],
          example: {
            title: "Worked Example: FOIL",
            problem: "Expand: (2x + 1)(3x &minus; 4).",
            steps: [
              "First: 2x &middot; 3x = 6x<sup>2</sup>.",
              "Outer: 2x &middot; (&minus;4) = &minus;8x.",
              "Inner: 1 &middot; 3x = 3x.",
              "Last: 1 &middot; (&minus;4) = &minus;4.",
              "Combine: 6x<sup>2</sup> &minus; 8x + 3x &minus; 4 = <strong>6x<sup>2</sup> &minus; 5x &minus; 4</strong>."
            ]
          }
        },
        {
          heading: "Special Products",
          paragraphs: [
            "Two patterns are worth memorizing because they appear frequently:",
            "<strong>Square of a binomial:</strong> (a + b)<sup>2</sup> = a<sup>2</sup> + 2ab + b<sup>2</sup> and (a &minus; b)<sup>2</sup> = a<sup>2</sup> &minus; 2ab + b<sup>2</sup>. Don&rsquo;t forget the middle term!",
            "<strong>Difference of squares (product):</strong> (a + b)(a &minus; b) = a<sup>2</sup> &minus; b<sup>2</sup>. The middle terms cancel."
          ],
          example: {
            title: "Worked Example: Square of a Binomial",
            problem: "Expand: (x &minus; 4)<sup>2</sup>.",
            steps: [
              "Use the pattern (a &minus; b)<sup>2</sup> = a<sup>2</sup> &minus; 2ab + b<sup>2</sup>.",
              "a = x, b = 4.",
              "x<sup>2</sup> &minus; 2(x)(4) + 4<sup>2</sup> = x<sup>2</sup> &minus; 8x + 16.",
              "Result: <strong>x<sup>2</sup> &minus; 8x + 16</strong>."
            ]
          }
        },
        {
          heading: "Multiplying Larger Polynomials",
          paragraphs: [
            "For products like (binomial)(trinomial), distribute each term of the first polynomial across every term of the second.",
            "Example: (x + 2)(x<sup>2</sup> &minus; 3x + 5) = x<sup>3</sup> &minus; 3x<sup>2</sup> + 5x + 2x<sup>2</sup> &minus; 6x + 10 = <strong>x<sup>3</sup> &minus; x<sup>2</sup> &minus; x + 10</strong>.",
            "Tip: Write it out systematically &mdash; multiply each term in the first by <em>every</em> term in the second, then combine like terms."
          ]
        }
      ]
    },
    quiz: [
      {
        id: "d10q1", question: "Expand: 2x(x + 5).",
        type: "multiple-choice",
        options: ["2x<sup>2</sup> + 10x","2x<sup>2</sup> + 5x","2x + 10","x<sup>2</sup> + 10x"],
        correct: 0,
        explanation: "Distribute: 2x &middot; x + 2x &middot; 5 = <strong>2x<sup>2</sup> + 10x</strong>.",
        difficulty: "easy", category: "topic"
      },
      {
        id: "d10q2", question: "Expand: (x + 4)(x + 2).",
        type: "multiple-choice",
        options: ["x<sup>2</sup> + 6x + 8","x<sup>2</sup> + 8x + 6","x<sup>2</sup> + 2x + 8","x<sup>2</sup> + 6x + 6"],
        correct: 0,
        explanation: "FOIL: x<sup>2</sup> + 2x + 4x + 8 = <strong>x<sup>2</sup> + 6x + 8</strong>.",
        difficulty: "easy", category: "topic"
      },
      {
        id: "d10q3", question: "Expand: (a + b)(a &minus; b).",
        type: "multiple-choice",
        options: ["a<sup>2</sup> &minus; b<sup>2</sup>","a<sup>2</sup> + b<sup>2</sup>","a<sup>2</sup> &minus; 2ab + b<sup>2</sup>","a<sup>2</sup> + 2ab &minus; b<sup>2</sup>"],
        correct: 0,
        explanation: "Difference of squares pattern: (a + b)(a &minus; b) = <strong>a<sup>2</sup> &minus; b<sup>2</sup></strong>.",
        difficulty: "easy", category: "topic"
      },
      {
        id: "d10q4", question: "Expand: (3x &minus; 2)(x + 5).",
        type: "multiple-choice",
        options: ["3x<sup>2</sup> + 13x &minus; 10","3x<sup>2</sup> + 17x &minus; 10","3x<sup>2</sup> &minus; 13x &minus; 10","3x<sup>2</sup> + 13x + 10"],
        correct: 0,
        explanation: "FOIL: 3x<sup>2</sup> + 15x &minus; 2x &minus; 10 = <strong>3x<sup>2</sup> + 13x &minus; 10</strong>.",
        difficulty: "medium", category: "topic"
      },
      {
        id: "d10q5", question: "Expand: (x + 3)<sup>2</sup>.",
        type: "multiple-choice",
        options: ["x<sup>2</sup> + 6x + 9","x<sup>2</sup> + 9","x<sup>2</sup> + 3x + 9","2x + 6"],
        correct: 0,
        explanation: "(x + 3)<sup>2</sup> = x<sup>2</sup> + 2(x)(3) + 9 = <strong>x<sup>2</sup> + 6x + 9</strong>. Don&rsquo;t forget the middle term!",
        difficulty: "medium", category: "topic"
      },
      {
        id: "d10q6", question: "Expand: (2x &minus; 1)<sup>2</sup>.",
        type: "multiple-choice",
        options: ["4x<sup>2</sup> &minus; 4x + 1","4x<sup>2</sup> &minus; 1","4x<sup>2</sup> + 4x + 1","2x<sup>2</sup> &minus; 2x + 1"],
        correct: 0,
        explanation: "(2x)<sup>2</sup> &minus; 2(2x)(1) + 1<sup>2</sup> = <strong>4x<sup>2</sup> &minus; 4x + 1</strong>.",
        difficulty: "medium", category: "topic"
      },
      {
        id: "d10q7", question: "Expand: (x + 1)(x<sup>2</sup> &minus; x + 1).",
        type: "multiple-choice",
        options: ["x<sup>3</sup> + 1","x<sup>3</sup> &minus; 1","x<sup>3</sup> + x<sup>2</sup> + 1","x<sup>3</sup> + 2x<sup>2</sup> + 1"],
        correct: 0,
        explanation: "Distribute: x<sup>3</sup> &minus; x<sup>2</sup> + x + x<sup>2</sup> &minus; x + 1. Middle terms cancel: <strong>x<sup>3</sup> + 1</strong>.",
        difficulty: "hard", category: "topic"
      },
      {
        id: "d10q8", question: "If (x + a)(x + b) = x<sup>2</sup> &minus; x &minus; 12, what are a and b?",
        type: "multiple-choice",
        options: ["a = 3, b = &minus;4 (or vice versa)","a = &minus;3, b = &minus;4","a = 2, b = &minus;6","a = &minus;2, b = 6"],
        correct: 0,
        explanation: "We need a + b = &minus;1 and ab = &minus;12. The pair 3 and &minus;4 works: 3 + (&minus;4) = &minus;1, 3(&minus;4) = &minus;12.",
        difficulty: "hard", category: "topic"
      },
      {
        id: "d10q9", question: "What is the degree of 5x<sup>3</sup> &minus; 2x<sup>5</sup> + x? (Review: Day 9)",
        type: "multiple-choice",
        options: ["5","3","1","9"],
        correct: 0,
        explanation: "The highest exponent is 5 (from &minus;2x<sup>5</sup>). Degree: <strong>5</strong>.",
        difficulty: "medium", category: "review"
      },
      {
        id: "d10q10", question: "Simplify: (3x<sup>2</sup> + 2x) &minus; (x<sup>2</sup> &minus; 4x + 3). (Review: Day 9)",
        type: "multiple-choice",
        options: ["2x<sup>2</sup> + 6x &minus; 3","4x<sup>2</sup> &minus; 2x &minus; 3","2x<sup>2</sup> + 6x + 3","2x<sup>2</sup> &minus; 2x &minus; 3"],
        correct: 0,
        explanation: "3x<sup>2</sup> + 2x &minus; x<sup>2</sup> + 4x &minus; 3 = <strong>2x<sup>2</sup> + 6x &minus; 3</strong>.",
        difficulty: "medium", category: "review"
      }
    ]
  },
  day11: {
    lesson: {
      title: "Factoring — GCF & Grouping",
      subtitle: "Reversing multiplication — pulling expressions apart to reveal their building blocks.",
      sections: [
        {
          heading: "What Is Factoring?",
          paragraphs: [
            "<strong>Factoring</strong> is the reverse of expanding (multiplying). It means writing an expression as a <strong>product</strong> of simpler expressions.",
            "Just as 12 = 3 &times; 4, we can factor 6x + 9 = 3(2x + 3). Factoring is one of the most important skills in algebra &mdash; it&rsquo;s the key to solving quadratic equations.",
            "Think of factoring like &ldquo;un-distributing&rdquo; &mdash; you&rsquo;re pulling out a common factor from each term."
          ]
        },
        {
          heading: "Factoring Out the GCF",
          paragraphs: [
            "The <strong>Greatest Common Factor (GCF)</strong> is the largest factor shared by all terms. To find it: factor each coefficient and take the lowest power of each variable.",
            "Steps: (1) Find the GCF of the coefficients. (2) Take the smallest exponent for each variable. (3) Divide each term by the GCF and write what remains in parentheses.",
            "Example: 12x<sup>3</sup> + 8x<sup>2</sup>. GCF = 4x<sup>2</sup>. Factor: 4x<sup>2</sup>(3x + 2)."
          ],
          example: {
            title: "Worked Example: Factoring Out the GCF",
            problem: "Factor: 18a<sup>3</sup>b &minus; 12a<sup>2</sup>b<sup>2</sup> + 6ab.",
            steps: [
              "GCF of coefficients: GCF(18, 12, 6) = 6.",
              "Smallest power of a: a<sup>1</sup>. Smallest power of b: b<sup>1</sup>. So GCF = 6ab.",
              "Divide each term: 18a<sup>3</sup>b/(6ab) = 3a<sup>2</sup>, &minus;12a<sup>2</sup>b<sup>2</sup>/(6ab) = &minus;2ab, 6ab/(6ab) = 1.",
              "Result: <strong>6ab(3a<sup>2</sup> &minus; 2ab + 1)</strong>."
            ]
          }
        },
        {
          heading: "Factoring by Grouping",
          paragraphs: [
            "When a polynomial has <strong>4 terms</strong> with no common factor across all terms, try <strong>grouping</strong>: split into two pairs, factor the GCF from each pair, then factor out the common binomial.",
            "Example: x<sup>3</sup> + 3x<sup>2</sup> + 2x + 6. Group: (x<sup>3</sup> + 3x<sup>2</sup>) + (2x + 6). Factor each: x<sup>2</sup>(x + 3) + 2(x + 3). Common binomial: (x + 3). Result: <strong>(x + 3)(x<sup>2</sup> + 2)</strong>.",
            "If the first grouping doesn&rsquo;t produce a common binomial, try rearranging the terms before grouping."
          ],
          example: {
            title: "Worked Example: Factoring by Grouping",
            problem: "Factor: 2xy + 6x + 5y + 15.",
            steps: [
              "Group: (2xy + 6x) + (5y + 15).",
              "Factor each group: 2x(y + 3) + 5(y + 3).",
              "Both groups share the binomial (y + 3).",
              "Factor it out: <strong>(y + 3)(2x + 5)</strong>."
            ]
          }
        },
        {
          heading: "Factoring with a Negative Leading Term",
          paragraphs: [
            "If the leading term is negative, factor out <strong>&minus;1</strong> (or the negative GCF) first. This makes the remaining expression easier to work with.",
            "Example: &minus;x<sup>2</sup> + 5x &minus; 6 = &minus;(x<sup>2</sup> &minus; 5x + 6). Now you can factor the trinomial inside.",
            "Always check your factored answer by expanding it back &mdash; you should get the original expression."
          ]
        }
      ]
    },
    quiz: [
      {
        id: "d11q1", question: "What is the GCF of 12x<sup>3</sup> and 8x<sup>2</sup>?",
        type: "multiple-choice",
        options: ["4x<sup>2</sup>","4x<sup>3</sup>","2x<sup>2</sup>","8x<sup>2</sup>"],
        correct: 0,
        explanation: "GCF of 12 and 8 is 4. Smallest power of x is x<sup>2</sup>. GCF: <strong>4x<sup>2</sup></strong>.",
        difficulty: "easy", category: "topic"
      },
      {
        id: "d11q2", question: "Factor: 6x + 18.",
        type: "multiple-choice",
        options: ["6(x + 3)","3(2x + 6)","6(x + 18)","2(3x + 9)"],
        correct: 0,
        explanation: "GCF is 6. Factor: <strong>6(x + 3)</strong>. This is fully factored since x + 3 has no common factor.",
        difficulty: "easy", category: "topic"
      },
      {
        id: "d11q3", question: "Factor: 10x<sup>2</sup> &minus; 15x.",
        type: "multiple-choice",
        options: ["5x(2x &minus; 3)","5(2x<sup>2</sup> &minus; 3x)","x(10x &minus; 15)","10x(x &minus; 15)"],
        correct: 0,
        explanation: "GCF = 5x. Factor: <strong>5x(2x &minus; 3)</strong>.",
        difficulty: "easy", category: "topic"
      },
      {
        id: "d11q4", question: "Factor: 4a<sup>3</sup> + 8a<sup>2</sup> &minus; 12a.",
        type: "multiple-choice",
        options: ["4a(a<sup>2</sup> + 2a &minus; 3)","4(a<sup>3</sup> + 2a<sup>2</sup> &minus; 3a)","2a(2a<sup>2</sup> + 4a &minus; 6)","4a<sup>2</sup>(a + 2 &minus; 3/a)"],
        correct: 0,
        explanation: "GCF = 4a. Divide: a<sup>2</sup> + 2a &minus; 3. Result: <strong>4a(a<sup>2</sup> + 2a &minus; 3)</strong>.",
        difficulty: "medium", category: "topic"
      },
      {
        id: "d11q5", question: "Factor by grouping: x<sup>3</sup> + 2x<sup>2</sup> + 3x + 6.",
        type: "multiple-choice",
        options: ["(x + 2)(x<sup>2</sup> + 3)","(x + 3)(x<sup>2</sup> + 2)","(x + 6)(x<sup>2</sup> + 1)","Cannot be factored"],
        correct: 0,
        explanation: "Group: x<sup>2</sup>(x + 2) + 3(x + 2). Common factor: (x + 2). Result: <strong>(x + 2)(x<sup>2</sup> + 3)</strong>.",
        difficulty: "medium", category: "topic"
      },
      {
        id: "d11q6", question: "Factor by grouping: 3xy &minus; 6x + 5y &minus; 10.",
        type: "multiple-choice",
        options: ["(y &minus; 2)(3x + 5)","(y + 2)(3x &minus; 5)","(3x &minus; 2)(y + 5)","(3x + 10)(y &minus; 1)"],
        correct: 0,
        explanation: "Group: 3x(y &minus; 2) + 5(y &minus; 2). Factor: <strong>(y &minus; 2)(3x + 5)</strong>.",
        difficulty: "medium", category: "topic"
      },
      {
        id: "d11q7", question: "Factor completely: &minus;3x<sup>3</sup> + 9x<sup>2</sup> &minus; 6x.",
        type: "multiple-choice",
        options: ["&minus;3x(x<sup>2</sup> &minus; 3x + 2)","3x(&minus;x<sup>2</sup> + 3x &minus; 2)","&minus;3(x<sup>3</sup> &minus; 3x<sup>2</sup> + 2x)","&minus;x(3x<sup>2</sup> &minus; 9x + 6)"],
        correct: 0,
        explanation: "Factor out &minus;3x: &minus;3x(x<sup>2</sup> &minus; 3x + 2). This is the most fully factored form with GCF extraction.",
        difficulty: "hard", category: "topic"
      },
      {
        id: "d11q8", question: "Factor by grouping: 6x<sup>3</sup> &minus; 9x<sup>2</sup> &minus; 4x + 6.",
        type: "multiple-choice",
        options: ["(2x &minus; 3)(3x<sup>2</sup> &minus; 2)","(3x &minus; 2)(2x<sup>2</sup> &minus; 3)","(6x &minus; 9)(x<sup>2</sup> &minus; 2/3)","(2x + 3)(3x<sup>2</sup> + 2)"],
        correct: 0,
        explanation: "Group: 3x<sup>2</sup>(2x &minus; 3) &minus; 2(2x &minus; 3). Factor: <strong>(2x &minus; 3)(3x<sup>2</sup> &minus; 2)</strong>.",
        difficulty: "hard", category: "topic"
      },
      {
        id: "d11q9", question: "Expand: (x &minus; 5)(x + 5). (Review: Day 10)",
        type: "multiple-choice",
        options: ["x<sup>2</sup> &minus; 25","x<sup>2</sup> + 25","x<sup>2</sup> &minus; 10x + 25","x<sup>2</sup> + 10x &minus; 25"],
        correct: 0,
        explanation: "Difference of squares: (x &minus; 5)(x + 5) = <strong>x<sup>2</sup> &minus; 25</strong>.",
        difficulty: "medium", category: "review"
      },
      {
        id: "d11q10", question: "Expand: (x + 2)<sup>2</sup>. (Review: Day 10)",
        type: "multiple-choice",
        options: ["x<sup>2</sup> + 4x + 4","x<sup>2</sup> + 4","x<sup>2</sup> + 2x + 4","2x + 4"],
        correct: 0,
        explanation: "(x + 2)<sup>2</sup> = x<sup>2</sup> + 2(x)(2) + 4 = <strong>x<sup>2</sup> + 4x + 4</strong>.",
        difficulty: "medium", category: "review"
      }
    ]
  },
  day12: {
    lesson: {
      title: "Factoring Trinomials",
      subtitle: "Finding two binomials whose product gives a trinomial — the core factoring skill.",
      sections: [
        {
          heading: "Factoring x² + bx + c",
          paragraphs: [
            "To factor a trinomial of the form <strong>x<sup>2</sup> + bx + c</strong>, find two numbers that <strong>multiply to c</strong> and <strong>add to b</strong>.",
            "If those numbers are p and q, then x<sup>2</sup> + bx + c = (x + p)(x + q).",
            "Example: x<sup>2</sup> + 7x + 12. Find two numbers that multiply to 12 and add to 7. Answer: 3 and 4. So x<sup>2</sup> + 7x + 12 = <strong>(x + 3)(x + 4)</strong>."
          ],
          example: {
            title: "Worked Example: Factoring x² + bx + c",
            problem: "Factor: x<sup>2</sup> &minus; 5x + 6.",
            steps: [
              "Find two numbers that multiply to 6 and add to &minus;5.",
              "Since c is positive and b is negative, both numbers are negative.",
              "Factors of 6: 1&times;6, 2&times;3. The pair &minus;2 and &minus;3 multiply to 6 and add to &minus;5.",
              "Result: <strong>(x &minus; 2)(x &minus; 3)</strong>."
            ]
          }
        },
        {
          heading: "Signs Guide",
          paragraphs: [
            "The signs in the trinomial tell you about the signs in the factors:",
            "<strong>c positive, b positive</strong>: both numbers positive. (x + p)(x + q). <strong>c positive, b negative</strong>: both numbers negative. (x &minus; p)(x &minus; q).",
            "<strong>c negative</strong>: one positive, one negative (the bigger one has the same sign as b). Example: x<sup>2</sup> + 2x &minus; 15 = (x + 5)(x &minus; 3) since 5 &times; (&minus;3) = &minus;15 and 5 + (&minus;3) = 2."
          ]
        },
        {
          heading: "Factoring ax² + bx + c (a ≠ 1)",
          paragraphs: [
            "When the leading coefficient is not 1, use the <strong>AC method</strong>: multiply a &times; c, find two numbers that multiply to ac and add to b, then split the middle term and factor by grouping.",
            "Example: 2x<sup>2</sup> + 7x + 3. AC = 2 &times; 3 = 6. Numbers: 1 and 6 (1 + 6 = 7). Rewrite: 2x<sup>2</sup> + x + 6x + 3.",
            "Group: x(2x + 1) + 3(2x + 1) = <strong>(2x + 1)(x + 3)</strong>."
          ],
          example: {
            title: "Worked Example: AC Method",
            problem: "Factor: 3x<sup>2</sup> &minus; 10x + 8.",
            steps: [
              "AC = 3 &times; 8 = 24. Find two numbers that multiply to 24 and add to &minus;10.",
              "The pair: &minus;4 and &minus;6 (&minus;4 &times; &minus;6 = 24, &minus;4 + &minus;6 = &minus;10).",
              "Rewrite: 3x<sup>2</sup> &minus; 4x &minus; 6x + 8.",
              "Group: x(3x &minus; 4) &minus; 2(3x &minus; 4) = <strong>(3x &minus; 4)(x &minus; 2)</strong>."
            ]
          }
        },
        {
          heading: "Always Check Your Work",
          paragraphs: [
            "After factoring, always <strong>expand</strong> your answer to verify it matches the original trinomial. This catches sign errors and incorrect factor pairs.",
            "Also, always factor out the GCF <em>first</em>. For example, 2x<sup>2</sup> + 8x + 6 = 2(x<sup>2</sup> + 4x + 3) = 2(x + 1)(x + 3).",
            "If a trinomial can&rsquo;t be factored using integers, we say it&rsquo;s <strong>prime</strong> (over the integers)."
          ]
        }
      ]
    },
    quiz: [
      {
        id: "d12q1", question: "Factor: x<sup>2</sup> + 5x + 6.",
        type: "multiple-choice",
        options: ["(x + 2)(x + 3)","(x + 1)(x + 6)","(x + 5)(x + 1)","(x &minus; 2)(x &minus; 3)"],
        correct: 0,
        explanation: "Numbers that multiply to 6 and add to 5: 2 and 3. Factor: <strong>(x + 2)(x + 3)</strong>.",
        difficulty: "easy", category: "topic"
      },
      {
        id: "d12q2", question: "Factor: x<sup>2</sup> &minus; 9x + 14.",
        type: "multiple-choice",
        options: ["(x &minus; 2)(x &minus; 7)","(x + 2)(x + 7)","(x &minus; 1)(x &minus; 14)","(x + 7)(x &minus; 2)"],
        correct: 0,
        explanation: "c positive, b negative: both negative. &minus;2 &times; &minus;7 = 14, &minus;2 + &minus;7 = &minus;9. Factor: <strong>(x &minus; 2)(x &minus; 7)</strong>.",
        difficulty: "easy", category: "topic"
      },
      {
        id: "d12q3", question: "Factor: x<sup>2</sup> + 3x &minus; 10.",
        type: "multiple-choice",
        options: ["(x + 5)(x &minus; 2)","(x &minus; 5)(x + 2)","(x + 10)(x &minus; 1)","(x &minus; 10)(x + 1)"],
        correct: 0,
        explanation: "c negative: one positive, one negative. 5 &times; (&minus;2) = &minus;10, 5 + (&minus;2) = 3. Factor: <strong>(x + 5)(x &minus; 2)</strong>.",
        difficulty: "easy", category: "topic"
      },
      {
        id: "d12q4", question: "Factor: x<sup>2</sup> &minus; x &minus; 30.",
        type: "multiple-choice",
        options: ["(x &minus; 6)(x + 5)","(x + 6)(x &minus; 5)","(x &minus; 10)(x + 3)","(x + 10)(x &minus; 3)"],
        correct: 0,
        explanation: "Need: multiply to &minus;30, add to &minus;1. Pair: &minus;6 and 5. Factor: <strong>(x &minus; 6)(x + 5)</strong>.",
        difficulty: "medium", category: "topic"
      },
      {
        id: "d12q5", question: "Factor: 2x<sup>2</sup> + 5x + 3.",
        type: "multiple-choice",
        options: ["(2x + 3)(x + 1)","(2x + 1)(x + 3)","(x + 3)(2x + 1)","Cannot be factored"],
        correct: 0,
        explanation: "AC = 6. Pair: 2 and 3 (add to 5). Rewrite: 2x<sup>2</sup> + 2x + 3x + 3. Group: 2x(x+1) + 3(x+1) = <strong>(2x + 3)(x + 1)</strong>.",
        difficulty: "medium", category: "topic"
      },
      {
        id: "d12q6", question: "Factor completely: 3x<sup>2</sup> + 12x + 9.",
        type: "multiple-choice",
        options: ["3(x + 1)(x + 3)","(3x + 3)(x + 3)","3(x + 3)<sup>2</sup>","(x + 1)(3x + 9)"],
        correct: 0,
        explanation: "GCF first: 3(x<sup>2</sup> + 4x + 3). Factor trinomial: 3(x + 1)(x + 3).",
        difficulty: "medium", category: "topic"
      },
      {
        id: "d12q7", question: "Factor: 6x<sup>2</sup> &minus; 7x &minus; 5.",
        type: "multiple-choice",
        options: ["(3x &minus; 5)(2x + 1)","(6x + 5)(x &minus; 1)","(3x + 5)(2x &minus; 1)","(6x &minus; 5)(x + 1)"],
        correct: 0,
        explanation: "AC = &minus;30. Pair: &minus;10 and 3. Rewrite: 6x<sup>2</sup> &minus; 10x + 3x &minus; 5. Group: 2x(3x &minus; 5) + 1(3x &minus; 5) = <strong>(3x &minus; 5)(2x + 1)</strong>.",
        difficulty: "hard", category: "topic"
      },
      {
        id: "d12q8", question: "Factor completely: 4x<sup>3</sup> &minus; 16x<sup>2</sup> + 12x.",
        type: "multiple-choice",
        options: ["4x(x &minus; 1)(x &minus; 3)","4x(x<sup>2</sup> &minus; 4x + 3)","2x(2x &minus; 2)(x &minus; 3)","x(4x &minus; 4)(x &minus; 3)"],
        correct: 0,
        explanation: "GCF = 4x: 4x(x<sup>2</sup> &minus; 4x + 3). Factor trinomial: &minus;1 &times; &minus;3 = 3, &minus;1 + &minus;3 = &minus;4. Result: <strong>4x(x &minus; 1)(x &minus; 3)</strong>.",
        difficulty: "hard", category: "topic"
      },
      {
        id: "d12q9", question: "Factor out the GCF: 15x<sup>4</sup> &minus; 10x<sup>3</sup> + 5x<sup>2</sup>. (Review: Day 11)",
        type: "multiple-choice",
        options: ["5x<sup>2</sup>(3x<sup>2</sup> &minus; 2x + 1)","5x(3x<sup>3</sup> &minus; 2x<sup>2</sup> + x)","x<sup>2</sup>(15x<sup>2</sup> &minus; 10x + 5)","5x<sup>2</sup>(3x<sup>2</sup> + 2x &minus; 1)"],
        correct: 0,
        explanation: "GCF = 5x<sup>2</sup>. Factor: <strong>5x<sup>2</sup>(3x<sup>2</sup> &minus; 2x + 1)</strong>.",
        difficulty: "medium", category: "review"
      },
      {
        id: "d12q10", question: "Expand: (3x + 2)(x &minus; 4). (Review: Day 10)",
        type: "multiple-choice",
        options: ["3x<sup>2</sup> &minus; 10x &minus; 8","3x<sup>2</sup> + 10x &minus; 8","3x<sup>2</sup> &minus; 14x &minus; 8","3x<sup>2</sup> &minus; 10x + 8"],
        correct: 0,
        explanation: "FOIL: 3x<sup>2</sup> &minus; 12x + 2x &minus; 8 = <strong>3x<sup>2</sup> &minus; 10x &minus; 8</strong>.",
        difficulty: "medium", category: "review"
      }
    ]
  }
};
