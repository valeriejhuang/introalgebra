export const DAYS_27_30 = {  day27: {
    lesson: {
      title: "Functions — Composition & Inverses",
      subtitle: "Chaining functions together and learning how to undo them — the algebra of input-output machines.",
      sections: [
        {
          heading: "Functions as Machines",
          paragraphs: [
            "A <strong>function</strong> is like a machine: you feed it an input, it applies a rule, and it spits out exactly one output. We write <strong>f(x)</strong> (read &ldquo;f of x&rdquo;) to mean &ldquo;the output of function f when the input is x.&rdquo; The letter f is the name of the machine, and x is whatever we drop in.",
            "The set of all allowed inputs is called the <strong>domain</strong>, and the set of all possible outputs is called the <strong>range</strong>. For example, f(x) = &radic;x has domain x &ge; 0 (you can&rsquo;t take the square root of a negative number in the reals) and range y &ge; 0.",
            "How do you tell whether a graph represents a function? Use the <strong>vertical line test</strong>: if every vertical line you draw hits the graph in <em>at most one point</em>, it&rsquo;s a function. If any vertical line hits two or more points, it&rsquo;s <em>not</em> a function &mdash; that would mean one input gives two different outputs."
          ],
          example: {
            title: "Worked Example: Evaluating a Function",
            problem: "Let f(x) = 3x&sup2; &minus; 2x + 5. Find f(&minus;1).",
            steps: [
              "Substitute x = &minus;1 into the rule: f(&minus;1) = 3(&minus;1)&sup2; &minus; 2(&minus;1) + 5.",
              "Compute the exponent: (&minus;1)&sup2; = 1, so we have 3(1) &minus; 2(&minus;1) + 5.",
              "Multiply: 3 + 2 + 5.",
              "Add: f(&minus;1) = <strong>10</strong>."
            ]
          }
        },
        {
          heading: "Evaluating & Combining Functions",
          paragraphs: [
            "Just like numbers, functions can be added, subtracted, and multiplied. If f(x) = 2x + 1 and g(x) = x &minus; 3, then (f + g)(x) = f(x) + g(x) = (2x + 1) + (x &minus; 3) = 3x &minus; 2. Similarly, (f &minus; g)(x) = f(x) &minus; g(x) = (2x + 1) &minus; (x &minus; 3) = x + 4.",
            "For multiplication: (f &middot; g)(x) = f(x) &times; g(x) = (2x + 1)(x &minus; 3) = 2x&sup2; &minus; 5x &minus; 3. You can also divide functions, but you must exclude any x-values where the denominator g(x) = 0.",
            "To evaluate a combined function at a specific value, you can either combine the formulas first and then substitute, or evaluate each function separately and then combine. Both approaches give the same answer &mdash; pick whichever feels easier."
          ]
        },
        {
          heading: "Function Composition",
          paragraphs: [
            "<strong>Function composition</strong> means feeding the output of one function into another. We write (f &compfn; g)(x) = f(g(x)), read &ldquo;f of g of x.&rdquo; Think of it as two machines in a row: x goes into machine g first, and whatever comes out then goes into machine f.",
            "Here is the crucial point: <strong>order matters!</strong> In general, f(g(x)) &ne; g(f(x)). For example, if f(x) = x + 3 and g(x) = 2x, then f(g(x)) = f(2x) = 2x + 3, but g(f(x)) = g(x + 3) = 2(x + 3) = 2x + 6. Different results!",
            "To compute f(g(x)), work from the <em>inside out</em>: first evaluate g(x), then plug that result into f. If you need f(g(2)), first find g(2), then plug that number into f. Always start with the innermost function."
          ],
          example: {
            title: "Worked Example: Function Composition",
            problem: "Let f(x) = x&sup2; + 1 and g(x) = 3x &minus; 2. Find (f &compfn; g)(x) and evaluate (f &compfn; g)(1).",
            steps: [
              "(f &compfn; g)(x) = f(g(x)) = f(3x &minus; 2). Replace every x in f with (3x &minus; 2).",
              "f(3x &minus; 2) = (3x &minus; 2)&sup2; + 1 = 9x&sup2; &minus; 12x + 4 + 1 = <strong>9x&sup2; &minus; 12x + 5</strong>.",
              "Now evaluate at x = 1: 9(1)&sup2; &minus; 12(1) + 5 = 9 &minus; 12 + 5 = <strong>2</strong>.",
              "Quick check via the step-by-step method: g(1) = 3(1) &minus; 2 = 1. Then f(1) = 1&sup2; + 1 = 2. &#10003;"
            ]
          }
        },
        {
          heading: "Inverse Functions",
          paragraphs: [
            "An <strong>inverse function</strong>, written f<sup>&minus;1</sup>(x), &ldquo;undoes&rdquo; what f does. If f turns input a into output b, then f<sup>&minus;1</sup> turns b back into a. Formally: if f(a) = b, then f<sup>&minus;1</sup>(b) = a. The composition of a function and its inverse always gives you back the original input: f(f<sup>&minus;1</sup>(x)) = x and f<sup>&minus;1</sup>(f(x)) = x.",
            "To <strong>find the inverse</strong> of a function: (1) replace f(x) with y, (2) swap x and y, (3) solve for y. The result is f<sup>&minus;1</sup>(x). For example, if f(x) = 2x + 6, write y = 2x + 6, swap to get x = 2y + 6, solve: x &minus; 6 = 2y, so y = (x &minus; 6)/2. Therefore f<sup>&minus;1</sup>(x) = (x &minus; 6)/2.",
            "Important: the &ldquo;&minus;1&rdquo; in f<sup>&minus;1</sup> is <em>not</em> an exponent! It does <em>not</em> mean 1/f(x). It&rsquo;s special notation for the inverse function. Also, the graph of f<sup>&minus;1</sup> is the <strong>reflection</strong> of the graph of f across the line y = x."
          ],
          example: {
            title: "Worked Example: Finding an Inverse",
            problem: "Find the inverse of f(x) = 5x &minus; 3.",
            steps: [
              "Write y = 5x &minus; 3.",
              "Swap x and y: x = 5y &minus; 3.",
              "Solve for y: x + 3 = 5y, so y = (x + 3)/5.",
              "Therefore f<sup>&minus;1</sup>(x) = <strong>(x + 3)/5</strong>.",
              "Verify: f(f<sup>&minus;1</sup>(x)) = 5 &middot; (x + 3)/5 &minus; 3 = (x + 3) &minus; 3 = x. &#10003;"
            ]
          }
        },
        {
          heading: "When Does an Inverse Exist?",
          paragraphs: [
            "Not every function has an inverse. For an inverse to exist, the function must be <strong>one-to-one</strong> &mdash; meaning each output corresponds to exactly one input. In other words, different inputs must always produce different outputs.",
            "The graphical test is the <strong>horizontal line test</strong>: if every horizontal line crosses the graph at most once, the function is one-to-one and has an inverse. For instance, f(x) = x&sup2; fails the horizontal line test because f(3) = 9 and f(&minus;3) = 9 &mdash; two different inputs give the same output.",
            "However, you can sometimes <strong>restrict the domain</strong> to make a function one-to-one. For f(x) = x&sup2;, if we only allow x &ge; 0, then it passes the horizontal line test and the inverse is f<sup>&minus;1</sup>(x) = &radic;x. This is why your calculator gives only the positive square root!"
          ]
        }
      ]
    },
    quiz: [
      {
        id: "d27q1", question: "If f(x) = 3x + 1, what is f(4)?",
        type: "multiple-choice",
        options: ["13","7","12","15"],
        correct: 0,
        explanation: "Substitute x = 4: f(4) = 3(4) + 1 = 12 + 1 = <strong>13</strong>.",
        difficulty: "easy", category: "topic"
      },
      {
        id: "d27q2", question: "What is the domain of f(x) = &radic;x?",
        type: "multiple-choice",
        options: ["x &ge; 0","All real numbers","x &gt; 0","x &le; 0"],
        correct: 0,
        explanation: "You cannot take the square root of a negative number (in real numbers), so the domain is <strong>x &ge; 0</strong>.",
        difficulty: "easy", category: "topic"
      },
      {
        id: "d27q3", question: "If f(x) = x + 2 and g(x) = 3x, what is f(g(1))?",
        type: "multiple-choice",
        options: ["5","9","6","7"],
        correct: 0,
        explanation: "First find g(1) = 3(1) = 3. Then f(3) = 3 + 2 = <strong>5</strong>.",
        difficulty: "easy", category: "topic"
      },
      {
        id: "d27q4", question: "If f(x) = 2x + 1 and g(x) = x&sup2;, what is (f &compfn; g)(x)?",
        type: "multiple-choice",
        options: ["2x&sup2; + 1","(2x + 1)&sup2;","2x&sup2; + 2x + 1","4x&sup2; + 1"],
        correct: 0,
        explanation: "(f &compfn; g)(x) = f(g(x)) = f(x&sup2;) = 2(x&sup2;) + 1 = <strong>2x&sup2; + 1</strong>.",
        hints: ["In composition f(g(x)), the inner function g is evaluated first — its output becomes the input for f.", "Start by finding g(x) = x², then substitute that entire expression wherever you see x in the formula for f."],
        difficulty: "medium", category: "topic"
      },
      {
        id: "d27q5", question: "If f(x) = x&sup2; &minus; 1 and g(x) = x + 3, what is f(g(2))?",
        type: "multiple-choice",
        options: ["24","8","12","14"],
        correct: 0,
        explanation: "First find g(2) = 2 + 3 = 5. Then f(5) = 5&sup2; &minus; 1 = 25 &minus; 1 = <strong>24</strong>.",
        hints: ["With composition at a specific number, always evaluate the inner function at that number first.", "Compute g(2) first — that single number then becomes the input you plug into f."],
        difficulty: "medium", category: "topic"
      },
      {
        id: "d27q6", question: "What is the inverse of f(x) = 2x &minus; 6?",
        type: "multiple-choice",
        options: ["f<sup>&minus;1</sup>(x) = (x + 6)/2","f<sup>&minus;1</sup>(x) = (x &minus; 6)/2","f<sup>&minus;1</sup>(x) = 2x + 6","f<sup>&minus;1</sup>(x) = &minus;2x + 6"],
        correct: 0,
        explanation: "Swap x and y: x = 2y &minus; 6. Solve: x + 6 = 2y, y = (x + 6)/2. So f<sup>&minus;1</sup>(x) = <strong>(x + 6)/2</strong>.",
        hints: ["To find an inverse, write y = f(x), then swap x and y, and solve for y.", "After swapping, your equation is x = 2y − 6. The first step is to undo the subtraction by adding 6 to both sides."],
        difficulty: "medium", category: "topic"
      },
      {
        id: "d27q7", question: "If f(x) = x + 1, g(x) = 2x, and h(x) = x&sup2;, what is f(g(h(2)))?",
        type: "multiple-choice",
        options: ["9","17","11","10"],
        correct: 0,
        explanation: "Work inside-out: h(2) = 4, g(4) = 8, f(8) = 8 + 1 = <strong>9</strong>.",
        hints: ["With nested compositions, always start from the innermost function and work outward one step at a time.", "The innermost piece is h(2) — evaluate that first, then feed the result into g, and finally into f."],
        difficulty: "hard", category: "topic"
      },
      {
        id: "d27q8", question: "Which function is the inverse of f(x) = 3x + 9?",
        type: "multiple-choice",
        options: ["f<sup>&minus;1</sup>(x) = (x &minus; 9)/3","f<sup>&minus;1</sup>(x) = 3x &minus; 9","f<sup>&minus;1</sup>(x) = (x + 9)/3","f<sup>&minus;1</sup>(x) = x/3 + 9"],
        correct: 0,
        explanation: "Swap x and y: x = 3y + 9. Solve: x &minus; 9 = 3y, y = (x &minus; 9)/3. Verify: f(f<sup>&minus;1</sup>(x)) = 3 &middot; (x &minus; 9)/3 + 9 = x &minus; 9 + 9 = x. &#10003;",
        hints: ["The inverse undoes every operation in reverse order — f multiplies by 3 then adds 9, so the inverse must undo those steps backwards.", "After swapping x and y you get x = 3y + 9. Start by subtracting 9 from both sides to isolate the term with y."],
        difficulty: "hard", category: "topic"
      },
      {
        id: "d27q9", question: "Solve: x&sup2; &minus; 9 &lt; 0. (Review: Day 22)",
        type: "multiple-choice",
        options: ["&minus;3 &lt; x &lt; 3","x &lt; &minus;3 or x &gt; 3","x &lt; 3","x &gt; &minus;3"],
        correct: 0,
        explanation: "Factor: (x &minus; 3)(x + 3) &lt; 0. The product is negative between the roots. Solution: <strong>&minus;3 &lt; x &lt; 3</strong>.",
        hints: ["This is a difference of squares — try factoring x² − 9 into two binomials first.", "Once you have (x − 3)(x + 3) < 0, think about where the product of two factors is negative — it happens between the two roots."],
        difficulty: "medium", category: "review"
      },
      {
        id: "d27q10", question: "If g(x) = 4x &minus; 7, what is g(3)? (Review: Day 26)",
        type: "multiple-choice",
        options: ["5","19","12","&minus;5"],
        correct: 0,
        explanation: "g(3) = 4(3) &minus; 7 = 12 &minus; 7 = <strong>5</strong>.",
        difficulty: "easy", category: "review"
      }
    ]
  },
  day28: {
    lesson: {
      title: "Exponential Functions & Logarithms",
      subtitle: "From bacteria to bank accounts — meet the functions that model explosive growth and steady decay.",
      sections: [
        {
          heading: "Exponential Growth and Decay",
          paragraphs: [
            "An <strong>exponential function</strong> has the form f(x) = a<sup>x</sup>, where a is a positive constant called the <strong>base</strong>. Unlike polynomial functions where x is in the base, here x is in the <em>exponent</em> &mdash; and that makes all the difference. Exponential functions grow (or shrink) incredibly fast.",
            "When the base is <strong>greater than 1</strong> (like 2<sup>x</sup> or 10<sup>x</sup>), the function models <strong>exponential growth</strong>: the values get larger and larger as x increases. Real-world examples include bacteria doubling every hour, viral social-media posts, and compound interest. When the base is <strong>between 0 and 1</strong> (like (&frac12;)<sup>x</sup>), the function models <strong>exponential decay</strong>: the values shrink toward zero. Examples include radioactive decay and the cooling of a hot cup of coffee.",
            "Every exponential function f(x) = a<sup>x</sup> passes through the point (0, 1) because a<sup>0</sup> = 1 for any positive base a. The graph never touches the x-axis &mdash; it gets closer and closer but never reaches zero. That invisible boundary is called a <strong>horizontal asymptote</strong> at y = 0."
          ],
          graphs: [{"type":"row","items":[{"type":"coordPlane","xMin":-3,"xMax":4,"yMin":-1,"yMax":9,"width":320,"height":300,"points":[{"x":-2,"y":0.25,"color":"#0ea5e9","label":"","labelPos":"bl"},{"x":-1,"y":0.5,"color":"#0ea5e9","label":"","labelPos":"bl"},{"x":0,"y":1,"color":"#0ea5e9","label":"1","labelPos":"tl"},{"x":1,"y":2,"color":"#0ea5e9","label":"2","labelPos":"tl"},{"x":2,"y":4,"color":"#0ea5e9","label":"4","labelPos":"tl"},{"x":3,"y":8,"color":"#0ea5e9","label":"y = 2\u02e3","labelPos":"tl"}],"caption":"Exponential growth: y = 2\u02e3"},{"type":"coordPlane","xMin":-3,"xMax":4,"yMin":-1,"yMax":5,"width":320,"height":300,"points":[{"x":-2,"y":4,"color":"#e53e3e","label":"4","labelPos":"tr"},{"x":-1,"y":2,"color":"#e53e3e","label":"2","labelPos":"tr"},{"x":0,"y":1,"color":"#e53e3e","label":"1","labelPos":"tr"},{"x":1,"y":0.5,"color":"#e53e3e","label":"","labelPos":"br"},{"x":2,"y":0.25,"color":"#e53e3e","label":"y = (\u00bd)\u02e3","labelPos":"br"}],"caption":"Exponential decay: y = (\u00bd)\u02e3"}]}],
          example: {
            title: "Worked Example: Exponential Growth",
            problem: "A colony of bacteria doubles every hour. Starting with 100 bacteria, how many are there after 6 hours?",
            steps: [
              "The population doubles each hour, so the base is 2 and the starting amount is 100.",
              "The model is P(t) = 100 &times; 2<sup>t</sup>, where t is time in hours.",
              "Substitute t = 6: P(6) = 100 &times; 2<sup>6</sup> = 100 &times; 64.",
              "P(6) = <strong>6,400 bacteria</strong>."
            ]
          }
        },
        {
          heading: "Properties of Exponential Functions",
          paragraphs: [
            "Exponential functions obey the same exponent laws you already know: <strong>a<sup>0</sup> = 1</strong>, <strong>a<sup>x</sup> &middot; a<sup>y</sup> = a<sup>x+y</sup></strong>, <strong>(a<sup>x</sup>)<sup>y</sup> = a<sup>xy</sup></strong>, and <strong>a<sup>x</sup> / a<sup>y</sup> = a<sup>x&minus;y</sup></strong>. These rules are your best friends when simplifying exponential expressions.",
            "To solve simple exponential equations, try to write both sides with the <strong>same base</strong>. For example, 2<sup>x</sup> = 32. Since 32 = 2<sup>5</sup>, we have 2<sup>x</sup> = 2<sup>5</sup>, so x = 5. Another: 4<sup>x</sup> = 64. Write 4 as 2&sup2; and 64 as 2<sup>6</sup>: (2&sup2;)<sup>x</sup> = 2<sup>6</sup>, so 2<sup>2x</sup> = 2<sup>6</sup>, giving 2x = 6 and x = 3.",
            "What if you <em>can&rsquo;t</em> rewrite both sides with the same base? For example, 2<sup>x</sup> = 7 doesn&rsquo;t have a neat integer answer. That&rsquo;s where logarithms come to the rescue &mdash; they&rsquo;re the tool designed specifically to &ldquo;bring down&rdquo; exponents."
          ]
        },
        {
          heading: "What Is a Logarithm?",
          paragraphs: [
            "A <strong>logarithm</strong> answers the question: &ldquo;What exponent do I need?&rdquo; We write log<sub>b</sub>(x) = y, and it means <strong>b<sup>y</sup> = x</strong>. In words: &ldquo;the log base b of x is y.&rdquo; The logarithm <em>is</em> the exponent. Think of it this way: <strong>the log is the exponent you put on the base to get the number</strong>.",
            "For example, log<sub>2</sub>(8) = 3 because 2<sup>3</sup> = 8. log<sub>10</sub>(1000) = 3 because 10<sup>3</sup> = 1000. log<sub>5</sub>(25) = 2 because 5&sup2; = 25. Every time, the log tells you the power.",
            "There are two special bases used so often they get their own notation. The <strong>common logarithm</strong> (base 10) is written simply as log(x) &mdash; no subscript needed. The <strong>natural logarithm</strong> (base <em>e</em> &asymp; 2.718) is written as ln(x). You&rsquo;ll see both on your calculator. For now, most of our work uses integer bases."
          ],
          example: {
            title: "Worked Example: Converting Between Forms",
            problem: "Rewrite log<sub>3</sub>(81) = 4 in exponential form, and rewrite 2<sup>5</sup> = 32 in logarithmic form.",
            steps: [
              "log<sub>3</sub>(81) = 4 means 3<sup>4</sup> = 81. (The base is 3, the exponent is 4, and the result is 81.)",
              "Check: 3<sup>4</sup> = 3 &times; 3 &times; 3 &times; 3 = 81. &#10003;",
              "2<sup>5</sup> = 32 translates to log<sub>2</sub>(32) = 5. (The base is 2, the result is 32, and the exponent is 5.)",
              "Check: log<sub>2</sub>(32) asks &ldquo;2 to what power equals 32?&rdquo; Since 2<sup>5</sup> = 32, the answer is 5. &#10003;"
            ]
          }
        },
        {
          heading: "Properties of Logarithms",
          paragraphs: [
            "Logarithms turn multiplication into addition and division into subtraction. The three key rules are: <strong>log<sub>b</sub>(mn) = log<sub>b</sub>(m) + log<sub>b</sub>(n)</strong> (product rule), <strong>log<sub>b</sub>(m/n) = log<sub>b</sub>(m) &minus; log<sub>b</sub>(n)</strong> (quotient rule), and <strong>log<sub>b</sub>(m<sup>n</sup>) = n &middot; log<sub>b</sub>(m)</strong> (power rule).",
            "Why do these work? Because logs <em>are</em> exponents, and these rules mirror the exponent laws. When you multiply powers with the same base, you add exponents &mdash; so logs of products become sums. When you raise a power to a power, you multiply exponents &mdash; so logs of powers become products.",
            "A couple of useful facts: log<sub>b</sub>(1) = 0 for any base b (because b<sup>0</sup> = 1), and log<sub>b</sub>(b) = 1 (because b<sup>1</sup> = b). These might seem trivial, but they show up constantly when simplifying logarithmic expressions."
          ],
          example: {
            title: "Worked Example: Using Log Properties",
            problem: "Simplify: log<sub>2</sub>(8) + log<sub>2</sub>(4).",
            steps: [
              "Use the product rule: log<sub>2</sub>(8) + log<sub>2</sub>(4) = log<sub>2</sub>(8 &times; 4) = log<sub>2</sub>(32).",
              "Now evaluate: 2 to what power equals 32? 2<sup>5</sup> = 32.",
              "So log<sub>2</sub>(8) + log<sub>2</sub>(4) = <strong>5</strong>.",
               "Quick check: log<sub>2</sub>(8) = 3 and log<sub>2</sub>(4) = 2. Indeed 3 + 2 = 5. &#10003;"
             ]
           },
           practice: [
             {
               type: "type-answer",
               prompt: "Use the product rule to simplify: log<sub>3</sub>(9) + log<sub>3</sub>(3) = log<sub>3</sub>(?).",
               answer: "27",
               accept: ["27"],
               explanation: "Product rule: log<sub>3</sub>(9) + log<sub>3</sub>(3) = log<sub>3</sub>(9 &times; 3) = log<sub>3</sub>(27)."
             },
             {
               type: "type-answer",
               prompt: "Evaluate: log<sub>2</sub>(32).",
               answer: "5",
               accept: ["5"],
               explanation: "2<sup>5</sup> = 32, so log<sub>2</sub>(32) = 5."
             },
             {
               type: "multiple-quick",
               prompt: "Which property says log(a/b) = log(a) &minus; log(b)?",
               options: ["Quotient Rule", "Product Rule", "Power Rule"],
               correct: 0,
               explanation: "The Quotient Rule for logarithms states that the log of a quotient equals the difference of the logs."
             }
           ]
         },
         {
           heading: "Compound Interest",
          paragraphs: [
            "One of the most important real-world applications of exponential functions is <strong>compound interest</strong>. The formula is: <strong>A = P(1 + r/n)<sup>nt</sup></strong>, where A is the final amount, P is the principal (starting amount), r is the annual interest rate (as a decimal), n is the number of times interest is compounded per year, and t is the time in years.",
            "For example, if you deposit $1,000 in a savings account earning 6% annual interest compounded yearly, after 2 years you have A = 1000(1 + 0.06/1)<sup>1&times;2</sup> = 1000(1.06)&sup2; = 1000 &times; 1.1236 = $1,123.60. Notice you earn interest <em>on your interest</em> &mdash; that&rsquo;s why it&rsquo;s called <em>compound</em> interest.",
            "The more frequently interest is compounded, the more you earn. Compounding monthly (n = 12) gives slightly more than yearly (n = 1). In the limit, as n &rarr; &infin;, we get <strong>continuous compounding</strong>: A = Pe<sup>rt</sup>. This connects exponential functions to the special number <em>e</em> &asymp; 2.718, which appears naturally whenever growth is continuous."
          ]
        }
      ]
    },
    quiz: [
      {
        id: "d28q1", question: "What is log<sub>2</sub>(16)?",
        type: "multiple-choice",
        options: ["4","8","2","16"],
        correct: 0,
        explanation: "2 to what power equals 16? 2<sup>4</sup> = 16, so log<sub>2</sub>(16) = <strong>4</strong>.",
        difficulty: "easy", category: "topic"
      },
      {
        id: "d28q2", question: "Rewrite 5<sup>3</sup> = 125 in logarithmic form.",
        type: "multiple-choice",
        options: ["log<sub>5</sub>(125) = 3","log<sub>3</sub>(125) = 5","log<sub>125</sub>(5) = 3","log<sub>5</sub>(3) = 125"],
        correct: 0,
        explanation: "b<sup>y</sup> = x becomes log<sub>b</sub>(x) = y. So 5<sup>3</sup> = 125 becomes <strong>log<sub>5</sub>(125) = 3</strong>.",
        difficulty: "easy", category: "topic"
      },
      {
        id: "d28q3", question: "Which function represents exponential <em>decay</em>?",
        type: "multiple-choice",
        options: ["f(x) = (&frac12;)<sup>x</sup>","f(x) = 2<sup>x</sup>","f(x) = 3<sup>x</sup>","f(x) = 10<sup>x</sup>"],
        correct: 0,
        explanation: "Exponential decay occurs when the base is between 0 and 1. Only <strong>(&frac12;)<sup>x</sup></strong> has a base less than 1.",
        difficulty: "easy", category: "topic"
      },
      {
        id: "d28q4", question: "Simplify: log<sub>3</sub>(9) + log<sub>3</sub>(3).",
        type: "multiple-choice",
        options: ["3","5","4","6"],
        correct: 0,
        explanation: "log<sub>3</sub>(9) = 2 and log<sub>3</sub>(3) = 1. So 2 + 1 = <strong>3</strong>. (Or use the product rule: log<sub>3</sub>(9 &times; 3) = log<sub>3</sub>(27) = 3.)",
        hints: ["You can evaluate each logarithm separately — ask yourself '3 to what power gives 9?' and '3 to what power gives 3?'", "Alternatively, use the product rule: the sum of two logs with the same base equals the log of the product."],
        difficulty: "medium", category: "topic"
      },
      {
        id: "d28q5", question: "Solve: 3<sup>x</sup> = 81.",
        type: "type-answer",
        answer: "4",
        accept: ["4", "x=4", "x = 4"],
        explanation: "Since 3<sup>4</sup> = 81, we have x = <strong>4</strong>.",
        hints: ["To solve an exponential equation, try expressing the right side as a power of the same base.", "Write 81 as a power of 3 — start multiplying: 3 × 3 = 9, 9 × 3 = 27, 27 × 3 = …"],
        difficulty: "medium", category: "topic"
      },
      {
        id: "d28q6", question: "You deposit $1,000 at 6% annual interest compounded yearly. How much do you have after 2 years?",
        type: "multiple-choice",
        options: ["$1,123.60","$1,120.00","$1,060.00","$1,236.00"],
        correct: 0,
        explanation: "A = 1000(1 + 0.06)<sup>2</sup> = 1000(1.06)&sup2; = 1000 &times; 1.1236 = <strong>$1,123.60</strong>.",
        hints: ["Use the compound interest formula A = P(1 + r/n)^(nt), where compounding yearly means n = 1.", "Plug in P = 1000, r = 0.06, n = 1, t = 2 — your first step is computing (1.06)²."],
        difficulty: "medium", category: "topic"
      },
      {
        id: "d28q7", question: "Simplify: log<sub>2</sub>(32) &minus; log<sub>2</sub>(4).",
        type: "multiple-choice",
        options: ["3","5","7","8"],
        correct: 0,
        explanation: "Quotient rule: log<sub>2</sub>(32/4) = log<sub>2</sub>(8) = <strong>3</strong> (since 2<sup>3</sup> = 8).",
        hints: ["When you subtract two logarithms with the same base, you can combine them using the quotient rule.", "Apply the quotient rule to get a single log: log₂(32) − log₂(4) = log₂(32 ÷ 4). Simplify the fraction first."],
        difficulty: "hard", category: "topic"
      },
      {
        id: "d28q8", question: "Solve: log<sub>3</sub>(x) = 4.",
        type: "multiple-choice",
        options: ["x = 81","x = 12","x = 64","x = 27"],
        correct: 0,
        explanation: "Rewrite in exponential form: 3<sup>4</sup> = x. So x = 81. Since 3<sup>4</sup> = 3 &times; 3 &times; 3 &times; 3 = <strong>81</strong>.",
        hints: ["A logarithmic equation can always be rewritten in exponential form — log_b(x) = y means b^y = x.", "Convert log₃(x) = 4 to exponential form: the base is 3, the exponent is 4, so compute 3⁴."],
        difficulty: "hard", category: "topic"
      },
      {
        id: "d28q9", question: "If f(x) = 2x + 3 and g(x) = x &minus; 1, what is (f &compfn; g)(4)? (Review: Day 27)",
        type: "multiple-choice",
        options: ["9","10","7","11"],
        correct: 0,
        explanation: "First g(4) = 4 &minus; 1 = 3. Then f(3) = 2(3) + 3 = 6 + 3 = <strong>9</strong>.",
        hints: ["(f ∘ g)(4) means f(g(4)) — always evaluate the inner function g at the given value first.", "Start by computing g(4), then take that result and substitute it into f."],
        difficulty: "medium", category: "review"
      },
      {
        id: "d28q10", question: "Simplify: (2<sup>3</sup>)&sup2;. (Review: Day 7)",
        type: "multiple-choice",
        options: ["64","32","12","36"],
        correct: 0,
        explanation: "Power-of-a-power rule: (2<sup>3</sup>)&sup2; = 2<sup>3&times;2</sup> = 2<sup>6</sup> = <strong>64</strong>.",
        difficulty: "easy", category: "review"
      },
      {
        id: "d28q11", question: "Simplify: log<sub>3</sub>(27<sup>4</sup>).",
        type: "multiple-choice",
        options: ["7","12","64","81"],
        correct: 1,
        explanation: "Power rule: log<sub>b</sub>(m<sup>n</sup>) = n &middot; log<sub>b</sub>(m). So log<sub>3</sub>(27<sup>4</sup>) = 4 &middot; log<sub>3</sub>(27). Since 3<sup>3</sup> = 27, log<sub>3</sub>(27) = 3. Therefore 4 &times; 3 = <strong>12</strong>.",
        hints: ["The power rule for logarithms lets you bring an exponent down in front as a multiplier.", "Use the power rule to rewrite log₃(27⁴) as 4 · log₃(27), then figure out what power of 3 gives 27."],
        difficulty: "medium", category: "topic"
      },
      {
        id: "d28q12", question: "Solve: 8<sup>x</sup> = 4<sup>x+1</sup>.",
        type: "multiple-choice",
        options: ["1","2","3","4"],
        correct: 1,
        explanation: "Rewrite with base 2: 8 = 2<sup>3</sup> and 4 = 2&sup2;. So (2<sup>3</sup>)<sup>x</sup> = (2&sup2;)<sup>x+1</sup>, giving 2<sup>3x</sup> = 2<sup>2x+2</sup>. Set exponents equal: 3x = 2x + 2, so x = <strong>2</strong>. Check: 8&sup2; = 64 and 4<sup>3</sup> = 64. &#10003;",
        hints: ["When both sides of an exponential equation can be written with the same base, rewrite them that way and compare exponents.", "Both 8 and 4 are powers of 2 — express each side as 2 raised to something, then set the exponents equal."],
        difficulty: "hard", category: "topic"
      },
      {
        id: "d28q13", question: "You invest $2,000 at 8% annual interest compounded quarterly (n = 4). How much do you have after 3 years?",
        type: "multiple-choice",
        options: ["$2,480.00","$2,536.48","$2,560.00","$2,600.00"],
        correct: 1,
        explanation: "A = P(1 + r/n)<sup>nt</sup> = 2000(1 + 0.08/4)<sup>12</sup> = 2000(1.02)<sup>12</sup>. Computing (1.02)<sup>12</sup> &asymp; 1.26824, so A &asymp; <strong>$2,536.48</strong>.",
        hints: ["Use the compound interest formula A = P(1 + r/n)^(nt). Quarterly compounding means n = 4.", "Compute the rate per period first: r/n = 0.08/4 = 0.02, and the total number of periods: nt = 4 × 3 = 12."],
        difficulty: "hard", category: "topic"
      },
      {
        id: "d28q14", question: "Which equation is the exponential form of log<sub>5</sub>(125) = 3?",
        type: "multiple-choice",
        options: ["3<sup>5</sup> = 125","5<sup>3</sup> = 125","125<sup>3</sup> = 5","5<sup>125</sup> = 3"],
        correct: 1,
        explanation: "log<sub>b</sub>(x) = y means b<sup>y</sup> = x. Here b = 5, x = 125, y = 3, so the exponential form is <strong>5<sup>3</sup> = 125</strong>.",
        hints: ["Remember the definition: log_b(x) = y is just another way of writing b^y = x.", "Identify the three parts: the base (subscript of log), the argument (inside the parentheses), and the result (right side of the equation)."],
        difficulty: "medium", category: "topic"
      }
    ]
  },
  day29: {
    lesson: {
      title: "Sequences & Series",
      subtitle: "Finding patterns in lists of numbers — and learning to add them up in a flash.",
      sections: [
        {
          heading: "What Is a Sequence?",
          paragraphs: [
            "A <strong>sequence</strong> is an ordered list of numbers that follows a pattern. Each number in the list is called a <strong>term</strong>, and we label them a<sub>1</sub>, a<sub>2</sub>, a<sub>3</sub>, &hellip; (the subscript tells you the term&rsquo;s position). For example, in the sequence 2, 5, 8, 11, &hellip; the first term is a<sub>1</sub> = 2, the second is a<sub>2</sub> = 5, and so on.",
            "There are two main ways to describe a sequence. An <strong>explicit formula</strong> lets you jump directly to any term: a<sub>n</sub> = (some expression involving n). A <strong>recursive formula</strong> defines each term based on the previous term(s), like a<sub>n</sub> = a<sub>n&minus;1</sub> + 3 with a<sub>1</sub> = 2. Both describe the same sequence, but the explicit formula is more powerful when you need the 100th term.",
            "The two most important types of sequences in algebra are <strong>arithmetic sequences</strong> (constant difference between terms) and <strong>geometric sequences</strong> (constant ratio between terms). Learning to recognize and work with both is a key algebraic skill."
          ]
        },
        {
          heading: "Arithmetic Sequences",
          paragraphs: [
            "An <strong>arithmetic sequence</strong> is one where you add the same number to get from one term to the next. That number is called the <strong>common difference</strong>, d. For example, 3, 7, 11, 15, 19, &hellip; is arithmetic with d = 4 (each term is 4 more than the previous one).",
            "The explicit formula for the n<sup>th</sup> term is: <strong>a<sub>n</sub> = a<sub>1</sub> + (n &minus; 1)d</strong>. This says: start at a<sub>1</sub> and add d a total of (n &minus; 1) times. For the sequence above, a<sub>n</sub> = 3 + (n &minus; 1)(4) = 4n &minus; 1. Want the 50th term? a<sub>50</sub> = 4(50) &minus; 1 = 199.",
            "To find d, subtract any term from the one after it: d = a<sub>n+1</sub> &minus; a<sub>n</sub>. If the differences are all the same, it&rsquo;s arithmetic. If they&rsquo;re not, the sequence isn&rsquo;t arithmetic."
          ],
          graphs: [{"type":"coordPlane","xMin":0,"xMax":6,"yMin":0,"yMax":22,"width":320,"height":280,"lines":[{"m":4,"b":-1,"color":"#9ca3af","label":"y = 4n \u2212 1","dashed":true}],"points":[{"x":1,"y":3,"color":"#0ea5e9","label":"a\u2081 = 3","labelPos":"tr"},{"x":2,"y":7,"color":"#0ea5e9","label":"a\u2082 = 7","labelPos":"tr"},{"x":3,"y":11,"color":"#0ea5e9","label":"a\u2083 = 11","labelPos":"tr"},{"x":4,"y":15,"color":"#0ea5e9","label":"a\u2084 = 15","labelPos":"tr"},{"x":5,"y":19,"color":"#0ea5e9","label":"a\u2085 = 19","labelPos":"tr"}],"caption":"Arithmetic sequence: constant jumps of d = 4"}],
          example: {
            title: "Worked Example: Arithmetic Sequence",
            problem: "Find the 20th term of the sequence 5, 8, 11, 14, &hellip;",
            steps: [
              "Identify a<sub>1</sub> = 5 and d = 8 &minus; 5 = 3.",
              "Use the formula: a<sub>n</sub> = a<sub>1</sub> + (n &minus; 1)d.",
              "a<sub>20</sub> = 5 + (20 &minus; 1)(3) = 5 + 19 &times; 3 = 5 + 57.",
              "a<sub>20</sub> = <strong>62</strong>."
            ]
          }
        },
        {
          heading: "Arithmetic Series",
          paragraphs: [
            "A <strong>series</strong> is the <em>sum</em> of the terms of a sequence. An <strong>arithmetic series</strong> is the sum of an arithmetic sequence. The sum of the first n terms is: <strong>S<sub>n</sub> = n(a<sub>1</sub> + a<sub>n</sub>)/2</strong>. Equivalently, S<sub>n</sub> = n/2 &middot; (2a<sub>1</sub> + (n &minus; 1)d). Both formulas give the same result &mdash; use whichever is more convenient.",
            "The idea behind this formula is beautifully simple and is often called <strong>Gauss&rsquo;s trick</strong>. Legend says young Gauss was asked to add 1 + 2 + 3 + &hellip; + 100. He paired the first and last terms: 1 + 100 = 101, 2 + 99 = 101, 3 + 98 = 101, and so on. There are 50 such pairs, so the sum is 50 &times; 101 = 5,050.",
            "In general, pairing terms from opposite ends of an arithmetic sequence always gives the same subtotal (a<sub>1</sub> + a<sub>n</sub>). There are n/2 such pairs, giving S<sub>n</sub> = n(a<sub>1</sub> + a<sub>n</sub>)/2. This trick works for <em>any</em> arithmetic series, not just 1 through 100."
          ],
          example: {
            title: "Worked Example: Arithmetic Series Sum",
            problem: "Find the sum: 2 + 5 + 8 + &hellip; + 29.",
            steps: [
              "Identify: a<sub>1</sub> = 2, d = 3, a<sub>n</sub> = 29. First find n: 29 = 2 + (n &minus; 1)(3) &rArr; 27 = 3(n &minus; 1) &rArr; n &minus; 1 = 9 &rArr; n = 10.",
              "Use the sum formula: S<sub>10</sub> = 10(2 + 29)/2.",
              "S<sub>10</sub> = 10 &times; 31 / 2 = 310 / 2.",
              "S<sub>10</sub> = <strong>155</strong>."
            ]
          }
        },
        {
          heading: "Geometric Sequences",
          paragraphs: [
            "A <strong>geometric sequence</strong> is one where you <em>multiply</em> by the same number to get from one term to the next. That number is called the <strong>common ratio</strong>, r. For example, 3, 6, 12, 24, 48, &hellip; is geometric with r = 2 (each term is doubled). And 81, 27, 9, 3, 1, &hellip; is geometric with r = &frac13; (each term is divided by 3).",
            "The explicit formula for the n<sup>th</sup> term is: <strong>a<sub>n</sub> = a<sub>1</sub> &middot; r<sup>n&minus;1</sup></strong>. For the doubling sequence above, a<sub>n</sub> = 3 &middot; 2<sup>n&minus;1</sup>. The 10th term is a<sub>10</sub> = 3 &middot; 2<sup>9</sup> = 3 &times; 512 = 1,536.",
            "To find r, divide any term by the one before it: r = a<sub>n+1</sub> / a<sub>n</sub>. If all the ratios are the same, it&rsquo;s geometric. Watch for negative ratios too &mdash; the sequence 2, &minus;6, 18, &minus;54, &hellip; is geometric with r = &minus;3. The terms alternate in sign!"
          ],
          example: {
            title: "Worked Example: Geometric Sequence",
            problem: "Find the 6th term of the geometric sequence 5, 15, 45, &hellip;",
            steps: [
              "Identify a<sub>1</sub> = 5 and r = 15/5 = 3.",
              "Use the formula: a<sub>n</sub> = a<sub>1</sub> &middot; r<sup>n&minus;1</sup>.",
              "a<sub>6</sub> = 5 &middot; 3<sup>6&minus;1</sup> = 5 &middot; 3<sup>5</sup> = 5 &middot; 243.",
              "a<sub>6</sub> = <strong>1,215</strong>."
            ]
          }
        },
        {
          heading: "Geometric Series",
          paragraphs: [
            "The sum of a <strong>finite geometric series</strong> (first n terms) is: <strong>S<sub>n</sub> = a<sub>1</sub>(1 &minus; r<sup>n</sup>) / (1 &minus; r)</strong>, as long as r &ne; 1. This formula comes from a clever algebraic trick: multiply S<sub>n</sub> by r, subtract from S<sub>n</sub>, and most terms cancel.",
            "What about an <strong>infinite geometric series</strong>? If |r| &lt; 1 (the ratio is a proper fraction), the terms get smaller and smaller, and the sum converges to a finite number: <strong>S = a<sub>1</sub> / (1 &minus; r)</strong>. For example, &frac12; + &frac14; + &frac18; + &frac{1}{16} + &hellip; has a<sub>1</sub> = &frac12; and r = &frac12;, so S = (&frac12;) / (1 &minus; &frac12;) = (&frac12;) / (&frac12;) = 1. The infinite sum equals exactly 1!",
            "If |r| &ge; 1, the terms don&rsquo;t shrink, and the sum grows without bound &mdash; we say the series <strong>diverges</strong>. For instance, 1 + 2 + 4 + 8 + &hellip; just keeps getting bigger forever. The infinite sum formula only works when |r| &lt; 1."
          ],
          example: {
            title: "Worked Example: Finite Geometric Series",
            problem: "Find the sum: 4 + 12 + 36 + 108 + 324.",
            steps: [
              "Identify: a<sub>1</sub> = 4, r = 12/4 = 3, and n = 5 terms.",
              "Use the formula: S<sub>5</sub> = 4(1 &minus; 3<sup>5</sup>) / (1 &minus; 3).",
              "Compute: 3<sup>5</sup> = 243. So S<sub>5</sub> = 4(1 &minus; 243) / (1 &minus; 3) = 4(&minus;242) / (&minus;2).",
              "S<sub>5</sub> = (&minus;968) / (&minus;2) = <strong>484</strong>."
            ]
          }
        }
      ]
    },
    quiz: [
      {
        id: "d29q1", question: "Is the sequence 2, 5, 8, 11, &hellip; arithmetic or geometric?",
        type: "multiple-choice",
        options: ["Arithmetic","Geometric","Neither","Both"],
        correct: 0,
        explanation: "Each term increases by 3 (a constant difference), so it is <strong>arithmetic</strong> with d = 3.",
        difficulty: "easy", category: "topic"
      },
      {
        id: "d29q2", question: "Find the next term in the geometric sequence 3, 6, 12, 24, &hellip;",
        type: "multiple-choice",
        options: ["48","30","36","27"],
        correct: 0,
        explanation: "The common ratio is r = 6/3 = 2. The next term is 24 &times; 2 = <strong>48</strong>.",
        difficulty: "easy", category: "topic"
      },
      {
        id: "d29q3", question: "What is the common difference of the sequence 7, 13, 19, 25, &hellip;?",
        type: "multiple-choice",
        options: ["6","7","5","13"],
        correct: 0,
        explanation: "d = 13 &minus; 7 = <strong>6</strong>. (Check: 19 &minus; 13 = 6, 25 &minus; 19 = 6. &#10003;)",
        difficulty: "easy", category: "topic"
      },
      {
        id: "d29q4", question: "Find the 20th term of the arithmetic sequence 5, 8, 11, 14, &hellip;",
        type: "type-answer",
        answer: "62",
        accept: ["62"],
        explanation: "a<sub>1</sub> = 5, d = 3. a<sub>20</sub> = 5 + (20 &minus; 1)(3) = 5 + 57 = <strong>62</strong>.",
        hints: ["Use the explicit formula for arithmetic sequences: a_n = a₁ + (n − 1)d.", "First find the common difference d by subtracting consecutive terms (8 − 5), then plug a₁ = 5, d, and n = 20 into the formula."],
        difficulty: "medium", category: "topic"
      },
      {
        id: "d29q5", question: "Find the sum of the first 10 terms of the arithmetic sequence 2, 5, 8, 11, &hellip;",
        type: "multiple-choice",
        options: ["155","145","160","135"],
        correct: 0,
        explanation: "a<sub>1</sub> = 2, d = 3. a<sub>10</sub> = 2 + 9(3) = 29. S<sub>10</sub> = 10(2 + 29)/2 = 10 &times; 31/2 = <strong>155</strong>.",
        hints: ["The sum formula for an arithmetic series is S_n = n(a₁ + aₙ)/2 — you'll need both the first and last terms.", "Find the 10th term first using a₁₀ = a₁ + 9d, then plug a₁ and a₁₀ into the sum formula."],
        difficulty: "medium", category: "topic"
      },
      {
        id: "d29q6", question: "In the geometric sequence a<sub>1</sub> = 3, r = 2, what is a<sub>6</sub>?",
        type: "multiple-choice",
        options: ["96","64","48","192"],
        correct: 0,
        explanation: "a<sub>6</sub> = 3 &middot; 2<sup>6&minus;1</sup> = 3 &middot; 2<sup>5</sup> = 3 &middot; 32 = <strong>96</strong>.",
        hints: ["The explicit formula for a geometric sequence is aₙ = a₁ · r^(n−1).", "Plug in n = 6: the exponent on r is 6 − 1 = 5, so you need to compute 2⁵ first, then multiply by a₁."],
        difficulty: "medium", category: "topic"
      },
      {
        id: "d29q7", question: "Find the sum of the geometric series: 4 + 12 + 36 + 108 + 324.",
        type: "multiple-choice",
        options: ["484","364","500","244"],
        correct: 0,
        explanation: "a<sub>1</sub> = 4, r = 3, n = 5. S<sub>5</sub> = 4(1 &minus; 3<sup>5</sup>)/(1 &minus; 3) = 4(1 &minus; 243)/(&minus;2) = 4(&minus;242)/(&minus;2) = <strong>484</strong>.",
        hints: ["Use the finite geometric series formula: S_n = a₁(1 − rⁿ) / (1 − r). First identify a₁, r, and n.", "Find the common ratio by dividing the second term by the first: 12 ÷ 4 gives you r, and count the terms to get n."],
        difficulty: "hard", category: "topic"
      },
      {
        id: "d29q8", question: "Find the sum of the infinite geometric series: 8 + 4 + 2 + 1 + &hellip;",
        type: "multiple-choice",
        options: ["16","15","32","The series diverges"],
        correct: 0,
        explanation: "a<sub>1</sub> = 8, r = &frac12;. Since |r| &lt; 1, S = a<sub>1</sub>/(1 &minus; r) = 8/(1 &minus; &frac12;) = 8/(&frac12;) = <strong>16</strong>.",
        hints: ["An infinite geometric series converges only when |r| < 1. Check whether that condition is met first.", "Find the common ratio r = 4/8, confirm |r| < 1, then apply the infinite sum formula S = a₁ / (1 − r)."],
        difficulty: "hard", category: "topic"
      },
      {
        id: "d29q9", question: "What is log<sub>5</sub>(25)? (Review: Day 28)",
        type: "multiple-choice",
        options: ["2","5","3","10"],
        correct: 0,
        explanation: "5 to what power equals 25? 5&sup2; = 25, so log<sub>5</sub>(25) = <strong>2</strong>.",
        difficulty: "easy", category: "review"
      },
      {
        id: "d29q10", question: "Solve the system: x + y = 7 and x &minus; y = 3. (Review: Day 20)",
        type: "multiple-choice",
        options: ["x = 5, y = 2","x = 4, y = 3","x = 3, y = 4","x = 7, y = 0"],
        correct: 0,
        explanation: "Add the equations: 2x = 10, so x = 5. Substitute: 5 + y = 7, so y = 2. Solution: <strong>x = 5, y = 2</strong>.",
        hints: ["With elimination, look for a variable you can cancel by adding or subtracting the two equations.", "Adding the two equations eliminates y because +y and −y cancel — try adding them to solve for x first."],
        difficulty: "medium", category: "review"
      },
      {
        id: "d29q11", question: "A geometric sequence has a<sub>1</sub> = 48 and r = &frac12;. What is the 6th term?",
        type: "multiple-choice",
        options: ["&frac34;","1","<sup>3</sup>&frasl;<sub>2</sub>","3"],
        correct: 2,
        explanation: "a<sub>6</sub> = a<sub>1</sub> &middot; r<sup>5</sup> = 48 &middot; (&frac12;)<sup>5</sup> = 48 &middot; <sup>1</sup>&frasl;<sub>32</sub> = <sup>48</sup>&frasl;<sub>32</sub> = <strong><sup>3</sup>&frasl;<sub>2</sub></strong>.",
        hints: ["Use aₙ = a₁ · r^(n−1). For the 6th term, the exponent on r is 5.", "Compute (½)⁵ first — that gives you a fraction, then multiply it by 48 and simplify."],
        difficulty: "medium", category: "topic"
      },
      {
        id: "d29q12", question: "Does the infinite series 18 + 6 + 2 + <sup>2</sup>&frasl;<sub>3</sub> + &hellip; converge? If so, find the sum.",
        type: "multiple-choice",
        options: ["Diverges","24","27","30"],
        correct: 2,
        explanation: "r = 6/18 = &frac13;. Since |r| &lt; 1, it converges. S = a<sub>1</sub>/(1 &minus; r) = 18/(1 &minus; &frac13;) = 18/(&frac23;) = 18 &times; <sup>3</sup>&frasl;<sub>2</sub> = <strong>27</strong>.",
        hints: ["First check convergence: find the common ratio r and verify |r| < 1.", "Divide the second term by the first to get r = 6/18. Since that's less than 1, the series converges — now use S = a₁/(1 − r)."],
        difficulty: "hard", category: "topic"
      },
      {
        id: "d29q13", question: "A theater has 20 rows. The first row has 15 seats, and each row has 2 more seats than the row before it. How many total seats?",
        type: "multiple-choice",
        options: ["640","660","680","700"],
        correct: 2,
        explanation: "Arithmetic series: a<sub>1</sub> = 15, d = 2, n = 20. a<sub>20</sub> = 15 + 19(2) = 53. S<sub>20</sub> = 20(15 + 53)/2 = 20 &times; 34 = <strong>680 seats</strong>.",
        hints: ["This is an arithmetic series problem — identify a₁ (seats in first row), d (increase per row), and n (number of rows).", "Find the number of seats in the last row using a₂₀ = a₁ + 19d, then use the sum formula S = n(a₁ + aₙ)/2."],
        difficulty: "hard", category: "topic"
      },
      {
        id: "d29q14", question: "An arithmetic sequence has a<sub>1</sub> = 7, d = 5, and last term 67. How many terms are in the sequence?",
        type: "multiple-choice",
        options: ["11","12","13","14"],
        correct: 2,
        explanation: "67 = 7 + (n &minus; 1)(5). Solve: 60 = 5(n &minus; 1), so n &minus; 1 = 12, giving n = <strong>13</strong>. Check: a<sub>13</sub> = 7 + 12(5) = 67. &#10003;",
        hints: ["Use the nth-term formula aₙ = a₁ + (n − 1)d and solve for n instead of aₙ.", "Set 67 = 7 + (n − 1)(5) and isolate (n − 1) — start by subtracting 7 from both sides."],
        difficulty: "medium", category: "topic"
      }
    ]
  },
  day30: {
    lesson: {
      title: "Graphing Functions & Transformations — Course Finale",
      subtitle: "Shift, stretch, reflect, and piece together — master the art of reading and transforming graphs.",
      sections: [
        {
          heading: "Transformations of Graphs",
          paragraphs: [
            "Once you know the graph of a &ldquo;parent function&rdquo; like f(x) = x&sup2; or f(x) = |x|, you can create entire families of related graphs using <strong>transformations</strong>. There are four main types: <strong>vertical shifts</strong>, <strong>horizontal shifts</strong>, <strong>reflections</strong>, and <strong>stretches/compressions</strong>.",
            "<strong>Vertical shift:</strong> f(x) + k moves the graph <em>up</em> by k units (or down if k is negative). <strong>Horizontal shift:</strong> f(x &minus; h) moves the graph <em>right</em> by h units (or left if h is negative). Notice the &ldquo;opposite&rdquo; direction for horizontal shifts &mdash; f(x &minus; 3) shifts <em>right</em> 3, not left!",
            "<strong>Reflection:</strong> &minus;f(x) reflects the graph across the <strong>x-axis</strong> (flip upside down), while f(&minus;x) reflects across the <strong>y-axis</strong> (flip left-right). <strong>Vertical stretch:</strong> a &middot; f(x) stretches the graph vertically by factor a (if a &gt; 1) or compresses it (if 0 &lt; a &lt; 1)."
          ],
          graphs: [{"type":"coordPlane","xMin":-5,"xMax":6,"yMin":-4,"yMax":8,"width":400,"height":350,"parabolas":[{"a":1,"b":0,"c":0,"color":"#0ea5e9","label":"y = x\u00b2","dashed":true},{"a":1,"b":-4,"c":7,"color":"#22c55e","label":"right 2, up 3"},{"a":-1,"b":-2,"c":3,"color":"#e53e3e","label":"left 1, flip, up 4"}],"points":[{"x":0,"y":0,"color":"#0ea5e9","label":"(0, 0)","labelPos":"br"},{"x":2,"y":3,"color":"#22c55e","label":"(2, 3)","labelPos":"tr"},{"x":-1,"y":4,"color":"#e53e3e","label":"(\u22121, 4)","labelPos":"tl"}],"caption":"Transformations of y = x\u00b2: shifts, reflections"}],
          example: {
            title: "Worked Example: Describing Transformations",
            problem: "Describe the transformations that turn f(x) = x&sup2; into g(x) = &minus;(x &minus; 2)&sup2; + 5.",
            steps: [
              "Start with the parent function f(x) = x&sup2;.",
              "The (x &minus; 2) inside means: shift <strong>right 2 units</strong>.",
              "The negative sign in front means: <strong>reflect across the x-axis</strong> (flip the parabola upside down).",
              "The + 5 at the end means: shift <strong>up 5 units</strong>.",
              "Summary: right 2, reflect over x-axis, up 5. The vertex moves from (0, 0) to <strong>(2, 5)</strong>."
            ]
          }
        },
        {
          heading: "Absolute Value Functions",
          paragraphs: [
            "The <strong>absolute value function</strong> f(x) = |x| produces a characteristic <strong>V-shape</strong> with its vertex at the origin. For x &ge; 0 the graph is the line y = x; for x &lt; 0 it&rsquo;s y = &minus;x. Transformations apply the same way: y = |x &minus; h| + k shifts the V to vertex (h, k), and y = a|x| stretches or compresses it.",
            "Solving absolute value equations: <strong>|expression| = a</strong> (with a &ge; 0) splits into two cases: expression = a or expression = &minus;a. For example, |2x &minus; 5| = 9 gives 2x &minus; 5 = 9 (so x = 7) or 2x &minus; 5 = &minus;9 (so x = &minus;2).",
            "Absolute value inequalities follow the rules from Day 6: <strong>|expression| &lt; a</strong> becomes &minus;a &lt; expression &lt; a (AND compound), and <strong>|expression| &gt; a</strong> becomes expression &lt; &minus;a OR expression &gt; a (OR compound). The graph of y = |f(x)| takes any part of f(x) that dips below the x-axis and reflects it upward."
          ]
        },
        {
          heading: "Piecewise Defined Functions",
          paragraphs: [
            "A <strong>piecewise function</strong> uses different formulas on different parts of its domain. It&rsquo;s like a road with different speed limits in different zones. You write it with a curly brace listing each rule and the interval where it applies.",
            "To <strong>evaluate</strong> a piecewise function at a specific x, first figure out which interval x falls in, then use the corresponding formula. For example, if f(x) = { 2x, if x &lt; 0; x + 1, if x &ge; 0 }, then f(&minus;3) = 2(&minus;3) = &minus;6 (using the first rule) and f(4) = 4 + 1 = 5 (using the second rule).",
            "To <strong>graph</strong> a piecewise function, graph each piece on its specified interval. Pay attention to endpoints: use a <strong>filled dot</strong> if the value is included (&le; or &ge;) and an <strong>open dot</strong> if it&rsquo;s not (&lt; or &gt;). Make sure exactly one rule applies at each boundary point so the function is well-defined."
          ],
          example: {
            title: "Worked Example: Evaluating a Piecewise Function",
            problem: "Let f(x) = { x&sup2; &minus; 1, if x &lt; 2; 3x, if x &ge; 2 }. Find f(&minus;1) and f(2).",
            steps: [
              "For f(&minus;1): since &minus;1 &lt; 2, use the first rule. f(&minus;1) = (&minus;1)&sup2; &minus; 1 = 1 &minus; 1 = <strong>0</strong>.",
              "For f(2): since 2 &ge; 2, use the second rule. f(2) = 3(2) = <strong>6</strong>.",
              "Note: at the boundary x = 2, we use the &ge; rule (second piece), which gives a filled dot at (2, 6).",
              "The first piece approaching x = 2 from the left gives 2&sup2; &minus; 1 = 3, so there is an open dot at (2, 3)."
            ]
          }
        },
        {
          heading: "Floor, Ceiling & Special Functions",
          paragraphs: [
            "The <strong>floor function</strong> &lfloor;x&rfloor; (also called the <strong>greatest integer function</strong>) gives the largest integer that is less than or equal to x. For example, &lfloor;3.7&rfloor; = 3, &lfloor;5&rfloor; = 5, and &lfloor;&minus;1.2&rfloor; = &minus;2 (not &minus;1, because &minus;2 &le; &minus;1.2 but &minus;1 &gt; &minus;1.2).",
            "The <strong>ceiling function</strong> &lceil;x&rceil; gives the smallest integer that is greater than or equal to x. So &lceil;3.7&rceil; = 4, &lceil;5&rceil; = 5, and &lceil;&minus;1.2&rceil; = &minus;1. The ceiling always rounds up (toward positive infinity), while the floor always rounds down (toward negative infinity).",
            "The graph of the floor function looks like a <strong>step function</strong> or staircase &mdash; it&rsquo;s constant on each interval [n, n+1) and then jumps up by 1 at each integer. Step functions appear in real life wherever values change in discrete jumps: postage rates, tax brackets, parking garage fees, and so on."
          ]
        },
        {
          heading: "Course Finale: The Big Picture",
          paragraphs: [
            "Congratulations &mdash; you&rsquo;ve completed an entire algebra crash course! Let&rsquo;s zoom out and see how everything connects. We started with <strong>expressions</strong> (Day 1) and learned to simplify them. Then we used inverse operations to solve <strong>equations</strong> (Days 2&ndash;4) and <strong>inequalities</strong> (Days 5&ndash;6). We mastered <strong>exponents</strong>, <strong>polynomials</strong>, and <strong>factoring</strong> (Days 7&ndash;13), which led to solving <strong>quadratic equations</strong> (Days 14&ndash;15). We then explored <strong>graphing</strong> and <strong>lines</strong> (Days 16&ndash;17), built up to <strong>systems of equations</strong> (Days 18&ndash;19), and tackled <strong>radicals</strong>, <strong>rationals</strong>, and <strong>advanced topics</strong> (Days 20&ndash;26). Finally, we connected it all through <strong>functions</strong>, <strong>exponentials &amp; logs</strong>, <strong>sequences &amp; series</strong>, and <strong>transformations</strong> (Days 27&ndash;30).",
            "The single most important problem-solving strategy in algebra is: <strong>recognize the type, then apply the right tool</strong>. Is it a linear equation? Isolate the variable. A quadratic? Factor or use the formula. A system? Substitution or elimination. An exponential? Use logs. The more you practice identifying problem types, the faster you&rsquo;ll become.",
            "What comes next? <strong>Precalculus</strong> deepens everything you&rsquo;ve learned: trigonometric functions, conic sections, polar coordinates, and limits. Then <strong>calculus</strong> uses algebra as its language to study change and accumulation. Every technique you&rsquo;ve mastered here &mdash; factoring, graphing, working with functions &mdash; will be used daily in higher math. You&rsquo;re ready!"
          ]
        }
      ]
    },
    quiz: [
      {
        id: "d30q1", question: "The graph of y = f(x) + 3 is the graph of y = f(x) shifted &hellip;",
        type: "multiple-choice",
        options: ["Up 3 units","Down 3 units","Right 3 units","Left 3 units"],
        correct: 0,
        explanation: "Adding a constant <em>outside</em> the function shifts the graph <strong>up</strong>. So f(x) + 3 moves the graph up 3 units.",
        difficulty: "easy", category: "topic"
      },
      {
        id: "d30q2", question: "What is |&minus;7|?",
        type: "multiple-choice",
        options: ["7","&minus;7","0","49"],
        correct: 0,
        explanation: "The absolute value of &minus;7 is its distance from 0, which is <strong>7</strong>.",
        difficulty: "easy", category: "topic"
      },
      {
        id: "d30q3", question: "Let f(x) = { 2x, if x &lt; 0; x + 1, if x &ge; 0 }. Find f(3).",
        type: "multiple-choice",
        options: ["4","6","3","7"],
        correct: 0,
        explanation: "Since 3 &ge; 0, use the second rule: f(3) = 3 + 1 = <strong>4</strong>.",
        difficulty: "easy", category: "topic"
      },
      {
        id: "d30q4", question: "Which equation represents f(x) = x&sup2; shifted right 2 and up 3?",
        type: "multiple-choice",
        options: ["y = (x &minus; 2)&sup2; + 3","y = (x + 2)&sup2; + 3","y = (x &minus; 3)&sup2; + 2","y = (x + 2)&sup2; &minus; 3"],
        correct: 0,
        explanation: "Shift right 2: replace x with (x &minus; 2). Shift up 3: add 3. Result: <strong>y = (x &minus; 2)&sup2; + 3</strong>.",
        hints: ["Horizontal shifts work 'opposite' to what you might expect — shifting right h units means replacing x with (x − h).", "A vertical shift up by k units adds k outside the function. Apply the horizontal shift to x first, then add the vertical shift."],
        difficulty: "medium", category: "topic"
      },
      {
        id: "d30q5", question: "Solve: |2x &minus; 5| = 9.",
        type: "multiple-choice",
        options: ["x = 7 or x = &minus;2","x = 7 or x = 2","x = &minus;7 or x = 2","x = 7"],
        correct: 0,
        explanation: "Two cases: 2x &minus; 5 = 9 gives 2x = 14, x = 7. 2x &minus; 5 = &minus;9 gives 2x = &minus;4, x = &minus;2. Solutions: <strong>x = 7 or x = &minus;2</strong>.",
        hints: ["An absolute value equation |A| = B splits into two separate equations: A = B and A = −B.", "Write the two cases: 2x − 5 = 9 and 2x − 5 = −9. Solve each linear equation independently."],
        difficulty: "medium", category: "topic"
      },
      {
        id: "d30q6", question: "What is &lfloor;3.7&rfloor; + &lceil;3.7&rceil;?",
        type: "multiple-choice",
        options: ["7","8","6","3"],
        correct: 0,
        explanation: "&lfloor;3.7&rfloor; = 3 (round down) and &lceil;3.7&rceil; = 4 (round up). So 3 + 4 = <strong>7</strong>.",
        hints: ["The floor function rounds down to the nearest integer, and the ceiling function rounds up to the nearest integer.", "Evaluate each part separately: what integer is just below 3.7, and what integer is just above 3.7? Then add them."],
        difficulty: "medium", category: "topic"
      },
      {
        id: "d30q7", question: "Starting with f(x) = x&sup2;, which sequence of transformations produces g(x) = &minus;(x + 1)&sup2; + 4?",
        type: "multiple-choice",
        options: ["Shift left 1, reflect over x-axis, shift up 4","Shift right 1, reflect over x-axis, shift up 4","Shift left 1, shift up 4, reflect over y-axis","Reflect over x-axis, shift right 1, shift down 4"],
        correct: 0,
        explanation: "(x + 1) means shift <strong>left 1</strong>. The negative sign means <strong>reflect over the x-axis</strong>. The + 4 means shift <strong>up 4</strong>.",
        hints: ["Break the equation into pieces: what does (x + 1) do to x? What does the negative sign do? What does + 4 do?", "Remember that (x + 1) means (x − (−1)), so the horizontal shift is in the direction opposite to the sign you see."],
        difficulty: "hard", category: "topic"
      },
      {
        id: "d30q8", question: "Let f(x) = { x&sup2; &minus; 1, if x &lt; 2; 3x, if x &ge; 2 }. What is f(2) + f(&minus;1)?",
        type: "type-answer",
        answer: "6",
        accept: ["6"],
        explanation: "f(2): since 2 &ge; 2, use 3x &rArr; f(2) = 6. f(&minus;1): since &minus;1 &lt; 2, use x&sup2; &minus; 1 &rArr; f(&minus;1) = 1 &minus; 1 = 0. Sum: 6 + 0 = <strong>6</strong>.",
        hints: ["For each input, first decide which piece of the piecewise function applies by checking the condition.", "Evaluate f(2) and f(−1) separately: check whether each input is < 2 or ≥ 2 to pick the correct rule, then add the results."],
        difficulty: "hard", category: "topic"
      },
      {
        id: "d30q9", question: "Find the sum: 1 + 2 + 3 + &hellip; + 50. (Review: Day 29)",
        type: "multiple-choice",
        options: ["1,275","1,250","2,550","1,300"],
        correct: 0,
        explanation: "Arithmetic series: S<sub>50</sub> = 50(1 + 50)/2 = 50 &times; 51/2 = <strong>1,275</strong>.",
        hints: ["This is an arithmetic series with a₁ = 1, aₙ = 50, and n = 50. Use the sum formula S = n(a₁ + aₙ)/2.", "Pair the first and last terms: 1 + 50 = 51. How many such pairs can you make from 50 terms?"],
        difficulty: "medium", category: "review"
      },
      {
        id: "d30q10", question: "Solve using the quadratic formula: x&sup2; &minus; 6x + 5 = 0. (Review: Day 16)",
        type: "multiple-choice",
        options: ["x = 1 or x = 5","x = 2 or x = 3","x = &minus;1 or x = &minus;5","x = 6 or x = &minus;1"],
        correct: 0,
        explanation: "a = 1, b = &minus;6, c = 5. D = 36 &minus; 20 = 16. x = (6 &pm; 4)/2. So x = 10/2 = 5 or x = 2/2 = 1. Solutions: <strong>x = 1 or x = 5</strong>.",
        hints: ["Identify a, b, and c from the standard form ax² + bx + c = 0, then plug them into the quadratic formula.", "Compute the discriminant b² − 4ac first — a perfect square under the radical means the roots will be nice integers."],
        difficulty: "medium", category: "review"
      }
    ]
  }
};
