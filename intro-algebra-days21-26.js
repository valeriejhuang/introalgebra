export const DAYS_21_26 = {  day21: {
    lesson: {
      title: "Graphing Quadratics",
      subtitle: "Parabolas, vertices, and intercepts — see the shape of every quadratic equation.",
      sections: [
        {
          heading: "Parabolas: y = ax&sup2;",
          paragraphs: [
            "The graph of any quadratic function is a U-shaped curve called a <strong>parabola</strong>. The simplest parabola is y = x<sup>2</sup>, which opens upward with its vertex at the origin (0, 0). Every quadratic graph is a stretched, shifted, or flipped version of this basic shape.",
            "The coefficient <strong>a</strong> controls two things: <em>direction</em> and <em>width</em>. If a &gt; 0, the parabola opens <strong>upward</strong> (like a bowl). If a &lt; 0, it opens <strong>downward</strong> (like an upside-down bowl). A larger |a| makes the parabola <strong>narrower</strong> (steeper), and a smaller |a| makes it <strong>wider</strong> (flatter).",
            "For example, y = 2x<sup>2</sup> is narrower than y = x<sup>2</sup>, and y = &frac12;x<sup>2</sup> is wider. The parabola y = &minus;x<sup>2</sup> is the same shape as y = x<sup>2</sup> but flipped upside down."
          ],
          graphs: [{"type":"row","items":[{"type":"coordPlane","xMin":-4,"xMax":4,"yMin":-1,"yMax":8,"width":240,"height":240,"parabolas":[{"a":2,"b":0,"c":0,"color":"#e53e3e","label":"y = 2x²"},{"a":1,"b":0,"c":0,"color":"#0ea5e9","label":"y = x²"},{"a":0.5,"b":0,"c":0,"color":"#22c55e","label":"y = ½x²"}],"caption":"Wider vs narrower: |a| controls steepness"},{"type":"coordPlane","xMin":-4,"xMax":4,"yMin":-8,"yMax":4,"width":240,"height":240,"parabolas":[{"a":1,"b":0,"c":0,"color":"#0ea5e9","label":"y = x²"},{"a":-1,"b":0,"c":0,"color":"#e53e3e","label":"y = −x²"}],"caption":"a > 0 opens up, a < 0 opens down"}]}]
        },
        {
          heading: "Vertex Form: y = a(x &minus; h)&sup2; + k",
          paragraphs: [
            "When we shift the basic parabola y = ax<sup>2</sup> horizontally by h units and vertically by k units, we get <strong>y = a(x &minus; h)<sup>2</sup> + k</strong>. The vertex moves from (0, 0) to (h, k). This is the same vertex form you learned when completing the square!",
            "The <strong>axis of symmetry</strong> is the vertical line x = h. It acts like a mirror &mdash; every point on one side of the axis has a matching point on the other side. This means if you know one side of the parabola, you know the other.",
            "For example, y = 2(x &minus; 1)<sup>2</sup> &minus; 3 has vertex (1, &minus;3), opens upward (a = 2 &gt; 0), and axis of symmetry x = 1. Compared to y = 2x<sup>2</sup>, it has been shifted 1 unit right and 3 units down."
          ],
          graphs: [{"type":"coordPlane","xMin":-3,"xMax":5,"yMin":-4,"yMax":6,"width":320,"height":300,"parabolas":[{"a":2,"b":-4,"c":-1,"color":"#7c3aed","label":"y = 2(x−1)² − 3"}],"points":[{"x":1,"y":-3,"color":"#e53e3e","label":"(1, −3)","labelPos":"br"}],"caption":"Vertex at (1, −3), axis of symmetry x = 1"}]
        },
        {
          heading: "From Standard to Vertex Form",
          paragraphs: [
            "Quadratics are often given in <strong>standard form</strong>: y = ax<sup>2</sup> + bx + c. To find the vertex and graph the parabola, convert to vertex form using completing the square. Alternatively, you can use the shortcut formula: the x-coordinate of the vertex is x = &minus;b / (2a), and then plug that value back in to find y.",
            "For example, y = x<sup>2</sup> &minus; 4x + 7. Vertex x-coordinate: x = &minus;(&minus;4) / (2 &times; 1) = 4/2 = 2. Vertex y-coordinate: y = (2)<sup>2</sup> &minus; 4(2) + 7 = 4 &minus; 8 + 7 = 3. Vertex: (2, 3). Or complete the square: y = (x<sup>2</sup> &minus; 4x + 4) + 3 = (x &minus; 2)<sup>2</sup> + 3. Same result!",
            "The formula x = &minus;b/(2a) is quick and reliable. Remember: it gives the <em>x-coordinate</em> of the vertex. You still need to substitute back into the original equation to get the y-coordinate. Both methods &mdash; the formula and completing the square &mdash; will always give the same answer."
          ],
          example: {
            title: "Worked Example: Standard to Vertex Form",
            problem: "Find the vertex of y = 2x<sup>2</sup> + 8x + 5.",
            steps: [
              "Method: use x = &minus;b/(2a). Here a = 2, b = 8.",
              "x = &minus;8 / (2 &times; 2) = &minus;8/4 = &minus;2.",
              "Find y: y = 2(&minus;2)<sup>2</sup> + 8(&minus;2) + 5 = 8 &minus; 16 + 5 = &minus;3.",
               "Vertex: <strong>(&minus;2, &minus;3)</strong>. The axis of symmetry is x = &minus;2."
             ]
           },
           practice: [
             {
               type: "type-answer",
               prompt: "Find the x-coordinate of the vertex of y = x<sup>2</sup> &minus; 6x + 5.",
               answer: "3",
               accept: ["3", "x=3", "x = 3"],
               explanation: "x = &minus;b/(2a) = &minus;(&minus;6)/(2&middot;1) = 6/2 = 3."
             },
             {
               type: "type-answer",
               prompt: "Find the vertex of y = x<sup>2</sup> + 4x + 1. Write as (x, y).",
               answer: "(-2, -3)",
               accept: ["(-2, -3)", "(-2,-3)", "(&minus;2, &minus;3)"],
               explanation: "x = &minus;4/2 = &minus;2. y = (&minus;2)<sup>2</sup> + 4(&minus;2) + 1 = 4 &minus; 8 + 1 = &minus;3. Vertex: (&minus;2, &minus;3)."
             },
             {
               type: "multiple-quick",
               prompt: "If a > 0 in y = ax<sup>2</sup> + bx + c, the parabola opens:",
               options: ["Upward", "Downward", "To the right"],
               correct: 0,
               explanation: "When a > 0, the parabola opens upward (U-shape). When a < 0, it opens downward."
             }
           ]
         },
         {
           heading: "Intercepts and Key Features",
          paragraphs: [
            "To fully graph a quadratic, find these key features: <strong>vertex</strong> (use completing the square or x = &minus;b/(2a)), <strong>axis of symmetry</strong> (x = h), <strong>direction of opening</strong> (sign of a), <strong>y-intercept</strong> (set x = 0, so y = c), and <strong>x-intercepts</strong> (set y = 0 and solve the quadratic equation).",
            "The <strong>y-intercept</strong> is the easiest to find: just plug in x = 0, giving y = a(0)<sup>2</sup> + b(0) + c = c. So the constant term c in standard form <em>is</em> the y-intercept. For <strong>x-intercepts</strong>, set y = 0 and solve ax<sup>2</sup> + bx + c = 0 by factoring, completing the square, or the quadratic formula.",
            "The <strong>domain</strong> of any quadratic function is all real numbers (&minus;&infin;, &infin;). The <strong>range</strong> depends on whether the parabola opens up or down: if a &gt; 0, the range is [k, &infin;) (y is at least k); if a &lt; 0, the range is (&minus;&infin;, k] (y is at most k). A quadratic may have 0, 1, or 2 x-intercepts, depending on the discriminant."
          ],
          graphs: [{"type":"coordPlane","xMin":-2,"xMax":6,"yMin":-5,"yMax":5,"width":340,"height":320,"parabolas":[{"a":1,"b":-4,"c":0,"color":"#7c3aed","label":"y = x² − 4x"}],"lines":[{"vertical":true,"x":2,"color":"#f59e0b","dashed":true,"label":"x = 2"}],"points":[{"x":2,"y":-4,"color":"#e53e3e","label":"vertex (2, −4)","labelPos":"br"},{"x":0,"y":0,"color":"#22c55e","label":"(0, 0)","labelPos":"tl"},{"x":4,"y":0,"color":"#22c55e","label":"(4, 0)","labelPos":"tr"}],"caption":"Key features: vertex, axis of symmetry (dashed), x-intercepts, y-intercept"}]
        },
        {
          heading: "Circles: x&sup2; + y&sup2; = r&sup2;",
          paragraphs: [
            "While studying graphs, it&rsquo;s important to recognize a related curve: the <strong>circle</strong>. The equation <strong>x<sup>2</sup> + y<sup>2</sup> = r<sup>2</sup></strong> describes a circle centered at the origin with radius r. For example, x<sup>2</sup> + y<sup>2</sup> = 25 is a circle with radius 5.",
            "How do you tell a circle from a parabola? In a circle equation, <em>both</em> x and y are squared with the <em>same</em> coefficient. In a parabola equation, only <em>one</em> variable is squared. So x<sup>2</sup> + y<sup>2</sup> = 9 is a circle, but y = x<sup>2</sup> + 9 is a parabola.",
            "A circle is <strong>not a function</strong> (it fails the vertical line test), but we can study its equation. More generally, (x &minus; h)<sup>2</sup> + (y &minus; k)<sup>2</sup> = r<sup>2</sup> is a circle centered at (h, k) with radius r. You&rsquo;ll use completing the square to convert expanded circle equations back to this form."
          ],
          graphs: [{"type":"row","items":[{"type":"coordPlane","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"width":260,"height":260,"points":[{"x":3,"y":0,"color":"#0ea5e9"},{"x":2.9,"y":0.77,"color":"#0ea5e9"},{"x":2.6,"y":1.5,"color":"#0ea5e9"},{"x":2.12,"y":2.12,"color":"#0ea5e9"},{"x":1.5,"y":2.6,"color":"#0ea5e9"},{"x":0.77,"y":2.9,"color":"#0ea5e9"},{"x":0,"y":3,"color":"#0ea5e9"},{"x":-0.77,"y":2.9,"color":"#0ea5e9"},{"x":-1.5,"y":2.6,"color":"#0ea5e9"},{"x":-2.12,"y":2.12,"color":"#0ea5e9"},{"x":-2.6,"y":1.5,"color":"#0ea5e9"},{"x":-2.9,"y":0.77,"color":"#0ea5e9"},{"x":-3,"y":0,"color":"#0ea5e9"},{"x":-2.9,"y":-0.77,"color":"#0ea5e9"},{"x":-2.6,"y":-1.5,"color":"#0ea5e9"},{"x":-2.12,"y":-2.12,"color":"#0ea5e9"},{"x":-1.5,"y":-2.6,"color":"#0ea5e9"},{"x":-0.77,"y":-2.9,"color":"#0ea5e9"},{"x":0,"y":-3,"color":"#0ea5e9"},{"x":0.77,"y":-2.9,"color":"#0ea5e9"},{"x":1.5,"y":-2.6,"color":"#0ea5e9"},{"x":2.12,"y":-2.12,"color":"#0ea5e9"},{"x":2.6,"y":-1.5,"color":"#0ea5e9"},{"x":2.9,"y":-0.77,"color":"#0ea5e9"},{"x":0,"y":0,"color":"#e53e3e","label":"center"}],"caption":"Circle: x² + y² = 9 (r = 3)"},{"type":"coordPlane","xMin":-4,"xMax":4,"yMin":-2,"yMax":10,"width":260,"height":260,"parabolas":[{"a":1,"b":0,"c":0,"color":"#7c3aed","label":"y = x²"}],"caption":"Parabola: only y is squared"}]}]
        }
      ]
    },
    quiz: [
      {
        id: "d21q1", question: "What is the vertex of y = (x + 2)<sup>2</sup> &minus; 5?",
        type: "multiple-choice",
        options: ["(&minus;2, &minus;5)","(2, &minus;5)","(&minus;2, 5)","(2, 5)"],
        correct: 0,
        explanation: "Vertex form y = a(x &minus; h)<sup>2</sup> + k. Rewrite: y = (x &minus; (&minus;2))<sup>2</sup> + (&minus;5). So h = &minus;2, k = &minus;5. Vertex: <strong>(&minus;2, &minus;5)</strong>.",
        difficulty: "easy", category: "topic",
        graph: {"type":"coordPlane","xMin":-6,"xMax":2,"yMin":-6,"yMax":4,"width":260,"height":260,"parabolas":[{"a":1,"b":4,"c":-1,"color":"#0ea5e9","label":"y = (x+2)² − 5"}],"points":[{"x":-2,"y":-5,"color":"#e53e3e","label":"(−2, −5)"}]}
      },
      {
        id: "d21q2", question: "Does the parabola y = &minus;3x<sup>2</sup> + 6x &minus; 1 open upward or downward?",
        type: "multiple-choice",
        options: ["Downward (a &lt; 0)","Upward (a &gt; 0)","Neither &mdash; it&rsquo;s a circle","Cannot be determined"],
        correct: 0,
        explanation: "The leading coefficient is a = &minus;3. Since a &lt; 0, the parabola opens <strong>downward</strong>.",
        difficulty: "easy", category: "topic"
      },
      {
        id: "d21q3", question: "What is the axis of symmetry of y = 2(x &minus; 4)<sup>2</sup> + 1?",
        type: "multiple-choice",
        options: ["x = 4","x = &minus;4","x = 1","x = 2"],
        correct: 0,
        explanation: "In vertex form y = a(x &minus; h)<sup>2</sup> + k, the axis of symmetry is x = h. Here h = 4, so the axis is <strong>x = 4</strong>.",
        difficulty: "easy", category: "topic",
        graph: {"type":"coordPlane","xMin":0,"xMax":8,"yMin":-1,"yMax":10,"width":260,"height":260,"parabolas":[{"a":2,"b":-16,"c":33,"color":"#7c3aed","label":"y = 2(x−4)² + 1"}],"points":[{"x":4,"y":1,"color":"#e53e3e","label":"(4, 1)"}]}
      },
      {
        id: "d21q4", question: "Convert y = x<sup>2</sup> &minus; 2x &minus; 3 to vertex form.",
        type: "multiple-choice",
        options: ["y = (x &minus; 1)<sup>2</sup> &minus; 4","y = (x &minus; 1)<sup>2</sup> &minus; 3","y = (x + 1)<sup>2</sup> &minus; 4","y = (x &minus; 2)<sup>2</sup> &minus; 7"],
        correct: 0,
        explanation: "Complete the square: x<sup>2</sup> &minus; 2x + 1 &minus; 1 &minus; 3 = (x &minus; 1)<sup>2</sup> &minus; 4. Vertex: (1, &minus;4).",
        difficulty: "medium", category: "topic",
        hints: ["Think about the technique that rewrites a quadratic by adding and subtracting the same constant inside the expression.", "Start by taking half of the coefficient of x, then square it — that gives you the number to complete the square."],
        graph: {"type":"coordPlane","xMin":-3,"xMax":5,"yMin":-5,"yMax":5,"width":260,"height":260,"parabolas":[{"a":1,"b":-2,"c":-3,"color":"#0ea5e9","label":"y = x²−2x−3"}],"points":[{"x":1,"y":-4,"color":"#e53e3e","label":"(1, −4)"}]}
      },
      {
        id: "d21q5", question: "Find the axis of symmetry of y = 3x<sup>2</sup> + 12x + 5.",
        type: "multiple-choice",
        options: ["x = &minus;2","x = 2","x = &minus;4","x = 4"],
        correct: 0,
        explanation: "x = &minus;b/(2a) = &minus;12/(2 &times; 3) = &minus;12/6 = <strong>&minus;2</strong>.",
        difficulty: "medium", category: "topic",
        hints: ["There's a quick formula using the coefficients a and b that gives the x-coordinate of the vertex — and the axis of symmetry passes through it.", "Identify a and b from the standard form, then compute −b divided by 2a."]
      },
      {
        id: "d21q6", question: "What is the y-intercept of y = 4x<sup>2</sup> &minus; 3x + 7?",
        type: "multiple-choice",
        options: ["(0, 7)","(0, 4)","(0, &minus;3)","(7, 0)"],
        correct: 0,
        explanation: "Set x = 0: y = 4(0)<sup>2</sup> &minus; 3(0) + 7 = 7. The y-intercept is <strong>(0, 7)</strong>.",
        difficulty: "medium", category: "topic",
        hints: ["The y-intercept is where the graph crosses the y-axis — what x-value does every point on the y-axis share?", "Substitute x = 0 into the equation and see what y equals."]
      },
      {
        id: "d21q7", question: "Find the x-intercepts of y = x<sup>2</sup> &minus; 5x + 6.",
        type: "multiple-choice",
        options: ["(2, 0) and (3, 0)","(1, 0) and (6, 0)","(&minus;2, 0) and (&minus;3, 0)","No x-intercepts"],
        correct: 0,
        explanation: "Set y = 0: x<sup>2</sup> &minus; 5x + 6 = 0. Factor: (x &minus; 2)(x &minus; 3) = 0. So x = 2 or x = 3. X-intercepts: <strong>(2, 0) and (3, 0)</strong>.",
        difficulty: "hard", category: "topic",
        hints: ["X-intercepts occur where y = 0 — so set the entire quadratic equal to zero and solve.", "Try factoring x² − 5x + 6 by finding two numbers that multiply to 6 and add to −5."],
        graph: {"type":"coordPlane","xMin":-1,"xMax":5,"yMin":-2,"yMax":8,"width":260,"height":260,"parabolas":[{"a":1,"b":-5,"c":6,"color":"#0ea5e9","label":"y = x²−5x+6"}],"points":[{"x":2,"y":0,"color":"#e53e3e","label":"(2, 0)"},{"x":3,"y":0,"color":"#e53e3e","label":"(3, 0)"}]}
      },
      {
        id: "d21q8", question: "Which equation represents a circle centered at the origin with radius 6?",
        type: "multiple-choice",
        options: ["x<sup>2</sup> + y<sup>2</sup> = 36","x<sup>2</sup> + y<sup>2</sup> = 6","(x &minus; 6)<sup>2</sup> + y<sup>2</sup> = 36","x<sup>2</sup> &minus; y<sup>2</sup> = 36"],
        correct: 0,
        explanation: "A circle centered at the origin with radius r has equation x<sup>2</sup> + y<sup>2</sup> = r<sup>2</sup>. With r = 6: <strong>x<sup>2</sup> + y<sup>2</sup> = 36</strong>.",
        difficulty: "hard", category: "topic",
        hints: ["Recall the standard circle equation centered at the origin — it involves x² and y² on the left side.", "The right side of the equation isn't the radius itself; it's the radius squared."]
      },
      {
        id: "d21q9", question: "Solve by completing the square: x<sup>2</sup> + 4x &minus; 5 = 0. (Review: Day 15)",
        type: "multiple-choice",
        options: ["x = 1 or x = &minus;5","x = &minus;1 or x = 5","x = 5 or x = &minus;1","x = &minus;2 &pm; 3"],
        correct: 0,
        explanation: "x<sup>2</sup> + 4x = 5. Add 4: (x + 2)<sup>2</sup> = 9. Take root: x + 2 = &pm;3. So x = 1 or x = &minus;5.",
        difficulty: "medium", category: "review",
        hints: ["Move the constant to the other side first, then complete the square on the left.", "Half of 4 is 2, and 2² = 4 — add that to both sides to create a perfect square trinomial."]
      },
      {
        id: "d21q10", question: "Simplify: (2 &minus; 3i)(2 + 3i). (Review: Day 17)",
        type: "type-answer",
        answer: "13",
        accept: ["13"],
        explanation: "This is a conjugate pair: (a &minus; bi)(a + bi) = a<sup>2</sup> + b<sup>2</sup>. So (2)<sup>2</sup> + (3)<sup>2</sup> = 4 + 9 = <strong>13</strong>.",
        difficulty: "medium", category: "review",
        hints: ["These two factors are complex conjugates — there's a shortcut formula for multiplying (a − bi)(a + bi).", "The conjugate product pattern gives a² + b² — identify a and b, then square and add."]
      }
    ]
  },
  day22: {
    lesson: {
      title: "Quadratic Inequalities & Optimization",
      subtitle: "Beyond equations — learn where quadratics are positive or negative, and how to find the best possible value.",
      sections: [
        {
          heading: "Quadratic Inequalities",
          paragraphs: [
            "A <strong>quadratic inequality</strong> looks like a quadratic equation but uses &lt;, &gt;, &le;, or &ge; instead of =. For example, x<sup>2</sup> &minus; 5x + 6 &gt; 0. Solving it means finding all x-values that make the inequality true &mdash; usually one or two <strong>intervals</strong> on the number line.",
            "The strategy has three steps: <strong>(1) Solve the related equation</strong> (set the expression equal to zero) to find the <strong>boundary points</strong> (roots). <strong>(2) Plot the roots on a number line</strong> &mdash; they divide the line into intervals. <strong>(3) Test a value from each interval</strong> to see whether the expression is positive or negative there.",
            "For x<sup>2</sup> &minus; 5x + 6 &gt; 0: first solve x<sup>2</sup> &minus; 5x + 6 = 0, giving (x &minus; 2)(x &minus; 3) = 0, so x = 2 and x = 3. These create three intervals: (&minus;&infin;, 2), (2, 3), and (3, &infin;). Test each: at x = 0 the expression is 6 &gt; 0 ✓, at x = 2.5 it&rsquo;s &minus;0.25 &lt; 0 ✗, and at x = 4 it&rsquo;s 2 &gt; 0 ✓. So the solution is x &lt; 2 or x &gt; 3."
          ],
          graphs: [{"type":"numberLine","min":-1,"max":6,"step":1,"width":480,"height":70,"points":[{"x":2,"open":true,"color":"#e53e3e","label":"2"},{"x":3,"open":true,"color":"#e53e3e","label":"3"}],"intervals":[{"to":2,"fromInf":true,"toOpen":true,"color":"rgba(14,165,233,0.2)"},{"from":3,"toInf":true,"fromOpen":true,"color":"rgba(14,165,233,0.2)"}],"caption":"x² − 5x + 6 > 0: solution is x < 2 or x > 3"}]
        },
        {
          heading: "Sign Analysis with Number Lines",
          paragraphs: [
            "<strong>Sign analysis</strong> is a systematic way to determine where an expression is positive or negative. Once you find the roots (boundary points), mark them on a number line, then test <em>one</em> value from each interval. The sign of the expression stays the same throughout each interval &mdash; it can only change at the roots.",
            "You can also use the <strong>factored form</strong> to track signs. For (x &minus; 2)(x &minus; 3): when x &lt; 2, both factors are negative, so their product is positive. When 2 &lt; x &lt; 3, the first factor is positive but the second is negative, so the product is negative. When x &gt; 3, both factors are positive, so the product is positive.",
            "Use <strong>open circles</strong> on the number line for strict inequalities (&lt; or &gt;) and <strong>closed circles</strong> for non-strict (&le; or &ge;). The boundary points themselves satisfy the non-strict inequality but not the strict one."
          ],
          example: {
            title: "Worked Example: Quadratic Inequality",
            problem: "Solve: x<sup>2</sup> + 2x &minus; 8 &le; 0.",
            steps: [
              "Solve x<sup>2</sup> + 2x &minus; 8 = 0: factor as (x + 4)(x &minus; 2) = 0, so x = &minus;4 or x = 2.",
              "Mark &minus;4 and 2 on a number line (closed circles for &le;).",
              "Test intervals: x = &minus;5 gives (&minus;1)(&minus;7) = 7 &gt; 0, x = 0 gives (4)(&minus;2) = &minus;8 &lt; 0, x = 3 gives (7)(1) = 7 &gt; 0.",
              "The expression is &le; 0 in the middle interval. Solution: <strong>&minus;4 &le; x &le; 2</strong>, or [&minus;4, 2]."
            ],
              graphs: [{"type":"numberLine","min":-7,"max":5,"step":1,"width":480,"height":70,"points":[{"x":-4,"open":false,"color":"#e53e3e","label":"−4"},{"x":2,"open":false,"color":"#e53e3e","label":"2"}],"intervals":[{"from":-4,"to":2,"fromOpen":false,"toOpen":false,"color":"rgba(14,165,233,0.2)"}],"caption":"Solution: −4 ≤ x ≤ 2"}]
           },
           practice: [
             {
               type: "type-answer",
               prompt: "Solve x<sup>2</sup> &minus; 9 &lt; 0. Write the solution as an interval (e.g. -3<x<3).",
               answer: "-3<x<3",
               accept: ["-3<x<3", "-3 < x < 3", "(-3, 3)", "−3 < x < 3"],
               explanation: "Factor: (x + 3)(x &minus; 3) &lt; 0. Roots: x = &minus;3, x = 3. Test middle: the expression is negative between &minus;3 and 3."
             },
             {
               type: "type-answer",
               prompt: "For x<sup>2</sup> &minus; 4x &minus; 5 &le; 0, what are the critical points? (smaller first, separated by comma)",
               answer: "-1, 5",
               accept: ["-1, 5", "-1,5", "−1, 5"],
               explanation: "Factor: (x &minus; 5)(x + 1) = 0. Roots: x = &minus;1 and x = 5."
             },
             {
               type: "multiple-quick",
               prompt: "To solve a quadratic inequality, the first step after getting 0 on one side is:",
               options: ["Factor the quadratic", "Divide by x", "Square both sides"],
               correct: 0,
               explanation: "Factor to find the critical points (roots), then use sign analysis on the intervals."
             }
           ]
         },
         {
           heading: "Inequalities with Rational Expressions",
          paragraphs: [
            "The same sign-analysis technique works for <strong>rational inequalities</strong> (inequalities with fractions containing variables). For example, (x + 1)/(x &minus; 2) &gt; 0. The key difference: you must find <em>all</em> <strong>critical points</strong>, which include both <strong>zeros</strong> (where the numerator = 0) and <strong>undefined values</strong> (where the denominator = 0).",
            "For (x + 1)/(x &minus; 2) &gt; 0: the numerator is zero at x = &minus;1, and the expression is undefined at x = 2. Mark both on a number line. Test: x = &minus;2 gives (&minus;1)/(&minus;4) = + &gt; 0 ✓, x = 0 gives (1)/(&minus;2) = &minus; ✗, x = 3 gives (4)/(1) = + &gt; 0 ✓. Solution: x &lt; &minus;1 or x &gt; 2.",
            "<strong>Important:</strong> undefined values are <em>never</em> included in the solution, even for &le; or &ge; (you can&rsquo;t divide by zero). So for (x + 1)/(x &minus; 2) &ge; 0, x = &minus;1 <em>is</em> included (it makes the expression equal 0), but x = 2 is <em>not</em> (it makes the denominator 0). Solution: x &le; &minus;1 or x &gt; 2."
          ]
        },
        {
          heading: "The Trivial Inequality",
          paragraphs: [
            "One of the most powerful facts in algebra is the <strong>trivial inequality</strong>: <strong>x<sup>2</sup> &ge; 0 for all real numbers x</strong>. A square is always non-negative &mdash; it can equal zero (when x = 0) but can never be negative.",
            "This simple fact has deep consequences. It tells us that for any quadratic a(x &minus; h)<sup>2</sup> + k with a &gt; 0, the minimum value is k (achieved when x = h). Similarly, a(x &minus; h)<sup>2</sup> + k with a &lt; 0 has a maximum value of k.",
            "A beautiful consequence is the <strong>AM-GM inequality</strong>: for non-negative numbers a and b, (a + b)/2 &ge; &radic;(ab). In words: the arithmetic mean is always at least as large as the geometric mean. Proof sketch: (&radic;a &minus; &radic;b)<sup>2</sup> &ge; 0 expands to a &minus; 2&radic;(ab) + b &ge; 0, which gives a + b &ge; 2&radic;(ab), so (a + b)/2 &ge; &radic;(ab). The trivial inequality does all the heavy lifting!"
          ]
        },
        {
          heading: "Quadratic Optimization",
          paragraphs: [
            "<strong>Optimization</strong> means finding the maximum or minimum value of an expression. For quadratics, the vertex gives us exactly that. If a &gt; 0, the vertex is the <strong>minimum</strong>. If a &lt; 0, the vertex is the <strong>maximum</strong>.",
            "Strategy: rewrite the quadratic in vertex form y = a(x &minus; h)<sup>2</sup> + k. Since (x &minus; h)<sup>2</sup> &ge; 0 (trivial inequality!), the smallest value of y occurs when (x &minus; h)<sup>2</sup> = 0, i.e., when x = h, giving y = k. If a &gt; 0, this is the minimum; if a &lt; 0, the maximum.",
            "Real-world applications abound. Revenue = price &times; quantity, and if demand decreases linearly as price increases, revenue becomes a downward-opening quadratic &mdash; vertex gives the price that maximizes revenue. Projectile height h(t) = &minus;16t<sup>2</sup> + v<sub>0</sub>t + h<sub>0</sub> is also a downward parabola, so the vertex gives the maximum height."
          ],
          example: {
            title: "Worked Example: Optimization",
            problem: "A farmer has 60 meters of fencing to enclose a rectangular pen along a river (no fence needed on the river side). What dimensions maximize the area?",
            steps: [
              "Let the width perpendicular to the river be w. The side along the river is 60 &minus; 2w (since two widths use 2w of fencing).",
              "Area A = w(60 &minus; 2w) = 60w &minus; 2w<sup>2</sup> = &minus;2w<sup>2</sup> + 60w.",
              "This is a downward parabola (a = &minus;2 &lt; 0). Maximum at w = &minus;b/(2a) = &minus;60/(2(&minus;2)) = 60/4 = 15.",
              "Dimensions: width = 15 m, length = 60 &minus; 2(15) = 30 m. Maximum area = 15 &times; 30 = <strong>450 m<sup>2</sup></strong>."
            ],
            graphs: [{"type":"coordPlane","xMin":-2,"xMax":32,"yMin":-50,"yMax":500,"width":340,"height":280,"gridStep":5,"parabolas":[{"a":-2,"b":60,"c":0,"color":"#e53e3e","label":"A = −2w² + 60w"}],"points":[{"x":15,"y":450,"color":"#7c3aed","label":"max (15, 450)","labelPos":"tr"},{"x":0,"y":0,"color":"#22c55e","label":"(0, 0)","labelPos":"br"},{"x":30,"y":0,"color":"#22c55e","label":"(30, 0)","labelPos":"bl"}],"caption":"Area vs. width: maximum area of 450 m² at width = 15 m"}]
          }
        }
      ]
    },
    quiz: [
      {
        id: "d22q1", question: "For which values of x is x<sup>2</sup> &minus; 9 &gt; 0?",
        type: "multiple-choice",
        options: ["x &lt; &minus;3 or x &gt; 3","&minus;3 &lt; x &lt; 3","x &gt; 9","x &gt; 3 only"],
        correct: 0,
        explanation: "Factor: (x + 3)(x &minus; 3) &gt; 0. Roots at &minus;3 and 3. Test intervals: the product is positive when x &lt; &minus;3 or x &gt; 3.",
        difficulty: "easy", category: "topic",
        graph: {"type":"numberLine","min":-6,"max":6,"step":1,"width":400,"height":60,"points":[{"x":-3,"open":true,"color":"#e53e3e","label":"−3"},{"x":3,"open":true,"color":"#e53e3e","label":"3"}],"intervals":[{"to":-3,"fromInf":true,"toOpen":true,"color":"rgba(14,165,233,0.2)"},{"from":3,"toInf":true,"fromOpen":true,"color":"rgba(14,165,233,0.2)"}]}
      },
      {
        id: "d22q2", question: "What are the boundary points for solving x<sup>2</sup> + x &minus; 12 &le; 0?",
        type: "multiple-choice",
        options: ["x = &minus;4 and x = 3","x = 4 and x = &minus;3","x = &minus;12 and x = 1","x = 6 and x = &minus;2"],
        correct: 0,
        explanation: "Solve x<sup>2</sup> + x &minus; 12 = 0: factor (x + 4)(x &minus; 3) = 0, so boundary points are <strong>x = &minus;4 and x = 3</strong>.",
        difficulty: "easy", category: "topic"
      },
      {
        id: "d22q3", question: "Which number line represents the solution to x<sup>2</sup> &minus; 4 &le; 0?",
        type: "multiple-choice",
        options: ["&minus;2 &le; x &le; 2 (closed interval)","x &le; &minus;2 or x &ge; 2","x &lt; &minus;2 or x &gt; 2","&minus;4 &le; x &le; 0"],
        correct: 0,
        explanation: "Factor: (x + 2)(x &minus; 2) &le; 0. The expression is &le; 0 between the roots (including them): <strong>&minus;2 &le; x &le; 2</strong>.",
        difficulty: "easy", category: "topic",
        graph: {"type":"numberLine","min":-5,"max":5,"step":1,"width":400,"height":60,"points":[{"x":-2,"open":false,"color":"#e53e3e","label":"−2"},{"x":2,"open":false,"color":"#e53e3e","label":"2"}],"intervals":[{"from":-2,"to":2,"fromOpen":false,"toOpen":false,"color":"rgba(14,165,233,0.2)"}]}
      },
      {
        id: "d22q4", question: "Solve: x<sup>2</sup> &minus; x &minus; 6 &lt; 0.",
        type: "multiple-choice",
        options: ["&minus;2 &lt; x &lt; 3","x &lt; &minus;2 or x &gt; 3","&minus;3 &lt; x &lt; 2","x &lt; &minus;3 or x &gt; 2"],
        correct: 0,
        explanation: "Factor: (x &minus; 3)(x + 2) &lt; 0. Roots at x = &minus;2 and x = 3. Test: x = 0 gives (&minus;3)(2) = &minus;6 &lt; 0. Solution: <strong>&minus;2 &lt; x &lt; 3</strong>.",
        difficulty: "medium", category: "topic",
        hints: ["First factor the quadratic to find the boundary points, then figure out which interval makes the expression negative.", "Factor into (x − 3)(x + 2) — the expression is negative between the two roots."],
        graph: {"type":"numberLine","min":-5,"max":6,"step":1,"width":400,"height":60,"points":[{"x":-2,"open":true,"color":"#e53e3e","label":"−2"},{"x":3,"open":true,"color":"#e53e3e","label":"3"}],"intervals":[{"from":-2,"to":3,"fromOpen":true,"toOpen":true,"color":"rgba(14,165,233,0.2)"}]}
      },
      {
        id: "d22q5", question: "Solve: x<sup>2</sup> + x &minus; 12 &ge; 0. Write the solution in interval notation.",
        type: "multiple-choice",
        options: ["(&minus;&infin;, &minus;4] &cup; [3, &infin;)","[&minus;4, 3]","(&minus;&infin;, &minus;3] &cup; [4, &infin;)","(&minus;4, 3)"],
        correct: 0,
        explanation: "Factor: (x + 4)(x &minus; 3) &ge; 0. The product is non-negative outside the roots (including them): <strong>(&minus;&infin;, &minus;4] &cup; [3, &infin;)</strong>.",
        difficulty: "medium", category: "topic",
        hints: ["For a ≥ inequality with an upward-opening parabola, the solution is outside the two roots.", "Factor x² + x − 12 to find the boundary points, then determine where the expression is non-negative."],
        graph: {"type":"numberLine","min":-7,"max":6,"step":1,"width":400,"height":60,"points":[{"x":-4,"open":false,"color":"#e53e3e","label":"−4"},{"x":3,"open":false,"color":"#e53e3e","label":"3"}],"intervals":[{"to":-4,"fromInf":true,"toOpen":false,"color":"rgba(14,165,233,0.2)"},{"from":3,"toInf":true,"fromOpen":false,"color":"rgba(14,165,233,0.2)"}]}
      },
      {
        id: "d22q6", question: "Solve: 2x<sup>2</sup> + 3x &minus; 5 &le; 0.",
        type: "multiple-choice",
        options: ["&minus;5/2 &le; x &le; 1","x &le; &minus;5/2 or x &ge; 1","&minus;1 &le; x &le; 5/2","x &le; &minus;1 or x &ge; 5/2"],
        correct: 0,
        explanation: "Solve 2x<sup>2</sup> + 3x &minus; 5 = 0: factor (2x + 5)(x &minus; 1) = 0, so x = &minus;5/2 or x = 1. Since a = 2 &gt; 0 (opens up), the parabola is &le; 0 between the roots: <strong>&minus;5/2 &le; x &le; 1</strong>.",
        difficulty: "medium", category: "topic",
        hints: ["Factor the quadratic — look for two numbers that multiply to 2 × (−5) = −10 and help you split the middle term.", "Once you find the roots, remember the parabola opens upward (a > 0), so the expression is ≤ 0 between the roots."],
        graph: {"type":"numberLine","min":-5,"max":4,"step":1,"width":400,"height":60,"points":[{"x":-2.5,"open":false,"color":"#e53e3e","label":"−5/2"},{"x":1,"open":false,"color":"#e53e3e","label":"1"}],"intervals":[{"from":-2.5,"to":1,"fromOpen":false,"toOpen":false,"color":"rgba(14,165,233,0.2)"}]}
      },
      {
        id: "d22q7", question: "Solve: (x &minus; 1)/(x + 3) &gt; 0.",
        type: "multiple-choice",
        options: ["x &lt; &minus;3 or x &gt; 1","&minus;3 &lt; x &lt; 1","x &gt; 1 only","x &gt; &minus;3 only"],
        correct: 0,
        explanation: "Critical points: x = 1 (numerator = 0) and x = &minus;3 (undefined). Test intervals: x = &minus;4 gives (&minus;5)/(&minus;1) = + ✓, x = 0 gives (&minus;1)/(3) = &minus; ✗, x = 2 gives (1)/(5) = + ✓. Solution: <strong>x &lt; &minus;3 or x &gt; 1</strong>.",
        difficulty: "hard", category: "topic",
        hints: ["For a rational inequality, find where the numerator is zero and where the denominator is zero — these are your critical points.", "Mark x = 1 and x = −3 on a number line, then test a value in each of the three intervals to check the sign."],
        graph: {"type":"numberLine","min":-6,"max":4,"step":1,"width":400,"height":60,"points":[{"x":-3,"open":true,"color":"#e53e3e","label":"−3"},{"x":1,"open":true,"color":"#e53e3e","label":"1"}],"intervals":[{"to":-3,"fromInf":true,"toOpen":true,"color":"rgba(14,165,233,0.2)"},{"from":1,"toInf":true,"fromOpen":true,"color":"rgba(14,165,233,0.2)"}]}
      },
      {
        id: "d22q8", question: "A ball is thrown upward with height h(t) = &minus;16t<sup>2</sup> + 64t + 5. What is the maximum height?",
        type: "type-answer",
        answer: "69",
        accept: ["69"],
        explanation: "Maximum at t = &minus;b/(2a) = &minus;64/(2(&minus;16)) = &minus;64/(&minus;32) = 2. Then h(2) = &minus;16(4) + 64(2) + 5 = &minus;64 + 128 + 5 = <strong>69</strong>.",
        difficulty: "hard", category: "topic",
        hints: ["Since a < 0 the parabola opens downward, so the vertex gives the maximum — use t = −b/(2a) to find the time.", "Once you find the time at the vertex, plug it back into h(t) to calculate the maximum height."]
      },
      {
        id: "d22q9", question: "What is the vertex of y = &minus;2x<sup>2</sup> + 8x &minus; 3? (Review: Day 21)",
        type: "multiple-choice",
        options: ["(2, 5)","(&minus;2, &minus;27)","(4, &minus;3)","(2, &minus;3)"],
        correct: 0,
        explanation: "x = &minus;b/(2a) = &minus;8/(2(&minus;2)) = &minus;8/(&minus;4) = 2. y = &minus;2(4) + 8(2) &minus; 3 = &minus;8 + 16 &minus; 3 = 5. Vertex: <strong>(2, 5)</strong>.",
        difficulty: "medium", category: "review",
        hints: ["Use the vertex formula x = −b/(2a) to find the x-coordinate first.", "After finding x, substitute it back into the original equation to get the y-coordinate of the vertex."]
      },
      {
        id: "d22q10", question: "Solve using the quadratic formula: 2x<sup>2</sup> &minus; 5x &minus; 3 = 0. (Review: Day 16)",
        type: "multiple-choice",
        options: ["x = 3 or x = &minus;&frac12;","x = &minus;3 or x = &frac12;","x = 5 or x = &minus;3","x = 3/2 or x = &minus;1"],
        correct: 0,
        explanation: "a = 2, b = &minus;5, c = &minus;3. D = 25 + 24 = 49. x = (5 &pm; 7)/4. So x = 12/4 = 3 or x = &minus;2/4 = &minus;&frac12;.",
        difficulty: "medium", category: "review",
        hints: ["Identify a, b, and c, then compute the discriminant b² − 4ac first.", "Plug into x = (−b ± √discriminant) / (2a) and simplify the two solutions."]
      }
    ]
  },
  day23: {
    lesson: {
      title: "Ratios, Proportions & Variation",
      subtitle: "Comparing quantities and discovering how they grow together — or in opposite directions.",
      sections: [
        {
          heading: "Ratios and Rates",
          paragraphs: [
            "A <strong>ratio</strong> compares two quantities of the same kind. If a class has 12 boys and 18 girls, the ratio of boys to girls is 12:18, which simplifies to <strong>2:3</strong>. Ratios can also be written as fractions: 2/3.",
            "A <strong>rate</strong> compares two quantities with <em>different</em> units, like miles per hour or price per pound. If you drive 150 miles in 3 hours, your rate is 150/3 = 50 miles per hour. When the denominator is 1, we call it a <strong>unit rate</strong>.",
            "Simplifying ratios works just like simplifying fractions &mdash; divide both parts by their greatest common factor. The ratio 24:36 simplifies to 2:3 because both 24 and 36 are divisible by 12."
          ]
        },
        {
          heading: "Proportions and Cross-Multiplication",
          paragraphs: [
            "A <strong>proportion</strong> is an equation that says two ratios are equal: a/b = c/d. For example, 3/4 = 6/8 is a proportion. When one of the four values is unknown, you can solve for it.",
            "The fastest way to solve a proportion is <strong>cross-multiplication</strong>: if a/b = c/d, then a &times; d = b &times; c. This works because multiplying both sides by bd clears the fractions.",
            "Example: Solve x/5 = 12/20. Cross-multiply: 20x = 5 &times; 12 = 60. Divide by 20: x = 3. Always check: 3/5 = 12/20 &rArr; 0.6 = 0.6. &#10003;"
          ],
          example: {
            title: "Worked Example: Solving a Proportion",
            problem: "If 3 notebooks cost $7.50, how much do 8 notebooks cost?",
            steps: [
              "Set up the proportion: 3/7.50 = 8/x.",
              "Cross-multiply: 3x = 7.50 &times; 8 = 60.",
              "Divide by 3: x = 20.",
               "Answer: 8 notebooks cost <strong>$20.00</strong>."
             ]
           },
           practice: [
             {
               type: "type-answer",
               prompt: "Solve the proportion: x/6 = 5/3. What is x?",
               answer: "10",
               accept: ["10", "x=10", "x = 10"],
               explanation: "Cross-multiply: 3x = 30. Divide by 3: x = 10."
             },
             {
               type: "type-answer",
               prompt: "If 4 pencils cost $2.80, how much do 10 pencils cost? (Just the number, e.g. 7.00)",
               answer: "7.00",
               accept: ["7.00", "7", "$7.00", "$7", "7.0"],
               explanation: "Set up proportion: 4/2.80 = 10/x. Cross-multiply: 4x = 28. So x = $7.00."
             },
             {
               type: "multiple-quick",
               prompt: "To solve a/b = c/d using cross-multiplication, which equation do you get?",
               options: ["ad = bc", "ab = cd", "ac = bd"],
               correct: 0,
               explanation: "Cross-multiplication gives ad = bc (multiply each numerator by the opposite denominator)."
             }
           ]
         },
         {
           heading: "Direct Variation",
          paragraphs: [
            "Two quantities are in <strong>direct variation</strong> if one is always a constant multiple of the other: <strong>y = kx</strong>, where k is called the <strong>constant of variation</strong> (or constant of proportionality). When x doubles, y doubles too.",
            "You see direct variation everywhere: the total cost of gas varies directly with the number of gallons (at a fixed price per gallon), the distance you travel varies directly with time (at a constant speed), and the weight of fruit varies directly with the number of pounds you buy.",
            "To find k, use any known pair (x, y): k = y/x. Once you know k, you can predict y for any x. If y = 24 when x = 6, then k = 24/6 = 4, so the equation is y = 4x."
          ],
          graphs: [{"type":"coordPlane","xMin":-1,"xMax":8,"yMin":-2,"yMax":40,"width":320,"height":300,"gridStep":1,"lines":[{"m":5,"b":0,"color":"#22c55e","label":"y = 5x"}],"points":[{"x":0,"y":0,"color":"#22c55e","label":"origin","labelPos":"br"},{"x":3,"y":15,"color":"#e53e3e","label":"(3, 15)","labelPos":"tl"},{"x":7,"y":35,"color":"#e53e3e","label":"(7, 35)","labelPos":"tl"}],"caption":"Direct variation y = 5x: always passes through the origin"}],
          example: {
            title: "Worked Example: Direct Variation",
            problem: "y varies directly with x. If y = 15 when x = 3, find y when x = 7.",
            steps: [
              "Find the constant of variation: k = y/x = 15/3 = 5.",
              "Write the equation: y = 5x.",
              "Substitute x = 7: y = 5(7) = 35.",
              "Answer: y = <strong>35</strong>."
            ]
          }
        },
        {
          heading: "Inverse Variation & Scale Factors",
          paragraphs: [
            "In <strong>inverse variation</strong>, one quantity increases while the other decreases: <strong>y = k/x</strong> (equivalently, xy = k). If you have 12 workers painting a house, it takes fewer hours than with 4 workers &mdash; more workers means less time per person.",
            "To find k in an inverse variation, multiply: k = x &times; y. If y = 6 when x = 4, then k = 24, so y = 24/x. When x = 8, y = 24/8 = 3.",
            "A <strong>scale factor</strong> is the ratio between a model or drawing and the real object. If a map uses a scale of 1 cm : 50 km, then 3 cm on the map represents 3 &times; 50 = 150 km in reality. Scale factors connect directly to proportional reasoning."
          ],
          graphs: [{"type":"row","items":[{"type":"triangle","width":150,"height":130,"vertices":[[20,110],[130,110],[130,20]],"labels":[{"text":"A","dx":-12,"dy":0},{"text":"B","dx":12,"dy":0},{"text":"C","dx":12,"dy":-10}],"sides":[{"label":"5","dx":0,"dy":15},{"label":"4","dx":12,"dy":0},{"label":"3","dx":-12,"dy":-5}],"rightAngle":1,"color":"#0ea5e9","caption":"Small triangle (3-4-5)"},{"type":"triangle","width":220,"height":190,"vertices":[[20,170],[200,170],[200,20]],"labels":[{"text":"D","dx":-12,"dy":0},{"text":"E","dx":12,"dy":0},{"text":"F","dx":12,"dy":-10}],"sides":[{"label":"12.5","dx":0,"dy":15},{"label":"10","dx":14,"dy":0},{"label":"7.5","dx":-16,"dy":-5}],"rightAngle":1,"color":"#e53e3e","caption":"Large triangle (scale factor 2.5)"}]}]
        }
      ]
    },
    quiz: [
      {
        id: "d23q1", question: "Simplify the ratio 28:42.",
        type: "multiple-choice",
        options: ["2:3","4:6","7:11","14:21"],
        correct: 0,
        explanation: "GCF of 28 and 42 is 14. Divide both by 14: 28/14 = 2 and 42/14 = 3. Ratio: <strong>2:3</strong>.",
        difficulty: "easy", category: "topic"
      },
      {
        id: "d23q2", question: "Solve the proportion: x/6 = 10/15.",
        type: "multiple-choice",
        options: ["4","5","9","6"],
        correct: 0,
        explanation: "Cross-multiply: 15x = 60. Divide by 15: x = <strong>4</strong>.",
        difficulty: "easy", category: "topic"
      },
      {
        id: "d23q3", question: "If y varies directly with x and y = 12 when x = 4, what is the constant of variation k?",
        type: "multiple-choice",
        options: ["3","8","48","1/3"],
        correct: 0,
        explanation: "k = y/x = 12/4 = <strong>3</strong>.",
        difficulty: "easy", category: "topic",
        graph: {"type":"coordPlane","xMin":-1,"xMax":7,"yMin":-2,"yMax":22,"width":260,"height":240,"lines":[{"m":3,"b":0,"color":"#22c55e","label":"y = 3x"}],"points":[{"x":4,"y":12,"color":"#e53e3e","label":"(4, 12)","labelPos":"tl"},{"x":0,"y":0,"color":"#22c55e","label":"origin","labelPos":"br"}],"caption":"Direct variation always passes through the origin"}
      },
      {
        id: "d23q4", question: "A recipe calls for 2 cups of flour for every 3 cups of sugar. How many cups of flour are needed for 12 cups of sugar?",
        type: "multiple-choice",
        options: ["8","6","18","9"],
        correct: 0,
        explanation: "Set up the proportion: 2/3 = x/12. Cross-multiply: 3x = 24 &rArr; x = <strong>8</strong>.",
        difficulty: "medium", category: "topic",
        hints: ["Set up a proportion with flour-to-sugar ratios on each side of the equation.", "Cross-multiply to solve: if 2/3 = x/12, multiply the diagonals."]
      },
      {
        id: "d23q5", question: "y varies inversely with x. If y = 10 when x = 3, find y when x = 6.",
        type: "multiple-choice",
        options: ["5","20","15","2"],
        correct: 0,
        explanation: "k = xy = 10 &times; 3 = 30. When x = 6: y = 30/6 = <strong>5</strong>.",
        difficulty: "medium", category: "topic",
        hints: ["In inverse variation, the product of x and y is always the same constant k.", "Find k by multiplying the given x and y, then use y = k/x with the new x-value."],
        graph: {"type":"coordPlane","xMin":-1,"xMax":12,"yMin":-1,"yMax":14,"width":260,"height":240,"points":[{"x":2,"y":15,"color":"#a0aec0","label":"","labelPos":"tr"},{"x":3,"y":10,"color":"#e53e3e","label":"(3, 10)","labelPos":"tr"},{"x":5,"y":6,"color":"#a0aec0","label":"","labelPos":"tr"},{"x":6,"y":5,"color":"#e53e3e","label":"(6, ?)","labelPos":"tr"},{"x":10,"y":3,"color":"#a0aec0","label":"","labelPos":"tr"}],"caption":"Inverse variation: as x doubles, y halves (xy = 30)"}
      },
      {
        id: "d23q6", question: "On a map, 2 cm represents 80 km. What real distance does 5 cm represent?",
        type: "multiple-choice",
        options: ["200 km","160 km","250 km","100 km"],
        correct: 0,
        explanation: "Scale: 1 cm = 40 km. So 5 cm = 5 &times; 40 = <strong>200 km</strong>.",
        difficulty: "medium", category: "topic",
        hints: ["First figure out how many kilometers one centimeter represents.", "Divide 80 km by 2 cm to get the unit rate, then multiply by 5."]
      },
      {
        id: "d23q7", question: "Two similar triangles have corresponding sides in the ratio 3:5. If the shorter triangle has a side of length 9, what is the corresponding side of the larger triangle?",
        type: "multiple-choice",
        options: ["15","12","27","45"],
        correct: 0,
        explanation: "Set up the proportion: 3/5 = 9/x. Cross-multiply: 3x = 45 &rArr; x = <strong>15</strong>.",
        difficulty: "hard", category: "topic",
        hints: ["Similar triangles have proportional sides — set up a proportion using the given ratio and the known side.", "Write 3/5 = 9/x and cross-multiply to solve for the unknown side."],
        graph: {"type":"row","items":[{"type":"triangle","width":130,"height":110,"vertices":[[15,95],[115,95],[65,15]],"labels":[null,null,null],"sides":[{"label":"9","dx":0,"dy":14},{"label":"?","dx":8,"dy":-3},{"label":"","dx":0,"dy":0}],"color":"#0ea5e9","caption":"Smaller (ratio 3)"},{"type":"triangle","width":180,"height":150,"vertices":[[15,135],[165,135],[90,15]],"labels":[null,null,null],"sides":[{"label":"15","dx":0,"dy":14},{"label":"?","dx":10,"dy":-3},{"label":"","dx":0,"dy":0}],"color":"#e53e3e","caption":"Larger (ratio 5)"}]}
      },
      {
        id: "d23q8", question: "y varies directly with x<sup>2</sup>. If y = 50 when x = 5, find y when x = 3.",
        type: "multiple-choice",
        options: ["18","30","10","45"],
        correct: 0,
        explanation: "y = kx<sup>2</sup>. Find k: 50 = k(25) &rArr; k = 2. When x = 3: y = 2(9) = <strong>18</strong>.",
        difficulty: "hard", category: "topic",
        hints: ["This is direct variation with x², so the equation is y = kx² — use the given pair to find k.", "Plug in x = 5 and y = 50 to get k, then substitute x = 3 into y = kx²."],
        graph: {"type":"coordPlane","xMin":-1,"xMax":7,"yMin":-5,"yMax":55,"width":260,"height":240,"parabolas":[{"a":2,"b":0,"c":0,"color":"#7c3aed","label":"y = 2x²"}],"points":[{"x":5,"y":50,"color":"#e53e3e","label":"(5, 50)","labelPos":"tl"},{"x":3,"y":18,"color":"#e53e3e","label":"(3, ?)","labelPos":"tl"}],"caption":"y = 2x²: a direct variation with x squared"}
      },
      {
        id: "d23q9", question: "Solve the system: x + y = 8 and 2x &minus; y = 1. (Review: Day 20)",
        type: "multiple-choice",
        options: ["(3, 5)","(5, 3)","(4, 4)","(2, 6)"],
        correct: 0,
        explanation: "Add the equations: 3x = 9 &rArr; x = 3. Then y = 8 &minus; 3 = 5. Answer: <strong>(3, 5)</strong>.",
        difficulty: "medium", category: "review",
        hints: ["Try the elimination method — look at what happens when you add the two equations together.", "Adding the equations eliminates y because y and −y cancel out."]
      },
      {
        id: "d23q10", question: "Write the equation of a line with slope 3 passing through (1, 7). (Review: Day 19)",
        type: "multiple-choice",
        options: ["y = 3x + 4","y = 3x + 7","y = 3x &minus; 4","y = 7x + 3"],
        correct: 0,
        explanation: "Using point-slope: y &minus; 7 = 3(x &minus; 1) &rArr; y = 3x &minus; 3 + 7 = <strong>3x + 4</strong>.",
        difficulty: "medium", category: "review",
        hints: ["Use point-slope form: y − y₁ = m(x − x₁), with the given slope and point.", "Plug in m = 3, x₁ = 1, y₁ = 7, then distribute and simplify to slope-intercept form."]
      }
    ]
  },
  day24: {
    lesson: {
      title: "Radical Expressions & Square Roots",
      subtitle: "Undoing exponents — the world of roots, radicals, and the Pythagorean theorem.",
      sections: [
        {
          heading: "Square Roots and Cube Roots",
          paragraphs: [
            "A <strong>square root</strong> asks: &ldquo;What number, multiplied by itself, gives this value?&rdquo; Since 7 &times; 7 = 49, we write &radic;49 = 7. The symbol &radic; is called the <strong>radical sign</strong>, and the number under it is the <strong>radicand</strong>.",
            "Every positive number has two square roots &mdash; one positive and one negative. &radic;25 = 5, but (&minus;5)<sup>2</sup> = 25 too. By convention, the &radic; symbol refers to the <strong>principal (positive) square root</strong>. If we want both, we write &plusmn;&radic;25 = &plusmn;5.",
            "A <strong>cube root</strong> asks: &ldquo;What number, used as a factor three times, gives this value?&rdquo; The cube root of 8 is 2 because 2<sup>3</sup> = 8. Cube roots can be negative: the cube root of &minus;27 is &minus;3, since (&minus;3)<sup>3</sup> = &minus;27."
          ]
        },
        {
          heading: "Perfect Squares and Simplifying Radicals",
          paragraphs: [
            "<strong>Perfect squares</strong> are numbers whose square roots are whole numbers: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, and so on. Memorizing these makes working with radicals much faster.",
            "To <strong>simplify a radical</strong>, factor the radicand into a perfect-square part and a leftover part, then use the rule <strong>&radic;(ab) = &radic;a &middot; &radic;b</strong>. For example: &radic;72 = &radic;(36 &times; 2) = &radic;36 &middot; &radic;2 = 6&radic;2.",
            "Always look for the <em>largest</em> perfect square factor. &radic;48 = &radic;(16 &times; 3) = 4&radic;3 is simpler than writing &radic;(4 &times; 12) = 2&radic;12 (which still needs more simplifying)."
          ],
          example: {
            title: "Worked Example: Simplifying a Radical",
            problem: "Simplify &radic;200.",
            steps: [
              "Find the largest perfect square that divides 200: 100 &times; 2 = 200.",
              "Apply the product rule: &radic;200 = &radic;(100 &times; 2) = &radic;100 &middot; &radic;2.",
              "&radic;100 = 10.",
               "Result: <strong>10&radic;2</strong>."
             ]
           },
           practice: [
             {
               type: "type-answer",
               prompt: "Simplify &radic;50. Write in simplified radical form (e.g. 5sqrt2).",
               answer: "5sqrt2",
               accept: ["5sqrt2", "5√2", "5&radic;2", "5 sqrt 2"],
               explanation: "&radic;50 = &radic;(25 &times; 2) = &radic;25 &times; &radic;2 = 5&radic;2."
             },
             {
               type: "type-answer",
               prompt: "Simplify &radic;72.",
               answer: "6sqrt2",
               accept: ["6sqrt2", "6√2", "6&radic;2"],
               explanation: "&radic;72 = &radic;(36 &times; 2) = 6&radic;2."
             },
             {
               type: "multiple-quick",
               prompt: "Which is the simplified form of &radic;48?",
               options: ["4&radic;3", "2&radic;12", "6&radic;2"],
               correct: 0,
               explanation: "&radic;48 = &radic;(16 &times; 3) = 4&radic;3."
             }
           ]
         },
         {
           heading: "Adding, Subtracting & Multiplying Radicals",
          paragraphs: [
            "You can only add or subtract radicals that have the <strong>same radicand</strong> (like radicals). Think of it like combining like terms: 3&radic;5 + 7&radic;5 = 10&radic;5, just as 3x + 7x = 10x. But 3&radic;5 + 2&radic;3 cannot be combined further.",
            "Sometimes you need to simplify first before you can combine. For example: &radic;12 + &radic;27 = 2&radic;3 + 3&radic;3 = 5&radic;3. Both radicals simplify to multiples of &radic;3, so they become like terms.",
            "To <strong>multiply radicals</strong>, multiply the numbers under the radical signs: &radic;a &middot; &radic;b = &radic;(ab). For instance: &radic;3 &middot; &radic;7 = &radic;21. If there are coefficients out front, multiply those separately: 2&radic;3 &middot; 4&radic;5 = 8&radic;15."
          ],
          example: {
            title: "Worked Example: Adding Radicals",
            problem: "Simplify: 3&radic;8 + 5&radic;2.",
            steps: [
              "Simplify &radic;8 first: &radic;8 = &radic;(4 &times; 2) = 2&radic;2.",
              "So 3&radic;8 = 3 &times; 2&radic;2 = 6&radic;2.",
              "Now combine like radicals: 6&radic;2 + 5&radic;2 = <strong>11&radic;2</strong>."
            ]
          }
        },
        {
          heading: "Rationalizing the Denominator & the Pythagorean Theorem",
          paragraphs: [
            "In math, we prefer not to leave a radical in the denominator of a fraction. To <strong>rationalize the denominator</strong>, multiply both the numerator and denominator by the radical. For example: 5/&radic;3 = (5 &middot; &radic;3) / (&radic;3 &middot; &radic;3) = 5&radic;3/3.",
            "This works because &radic;3 &middot; &radic;3 = 3 (a whole number), clearing the radical from the bottom. The value of the fraction hasn&rsquo;t changed &mdash; we just multiplied by &radic;3/&radic;3 = 1.",
            "The <strong>Pythagorean theorem</strong> connects radicals to geometry: in a right triangle with legs a and b and hypotenuse c, a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>. To find a missing side, you take a square root. If a = 3 and b = 4, then c = &radic;(9 + 16) = &radic;25 = 5."
          ],
          graphs: [{"type":"triangle","width":200,"height":170,"vertices":[[20,150],[180,150],[180,20]],"labels":[{"text":"A","dx":-12,"dy":0},{"text":"B","dx":12,"dy":0},{"text":"C","dx":12,"dy":-10}],"sides":[{"label":"c = 5","dx":0,"dy":15},{"label":"b = 4","dx":14,"dy":0},{"label":"a = 3","dx":-14,"dy":-5}],"rightAngle":1,"color":"#0ea5e9","caption":"a² + b² = c² → 9 + 16 = 25"}]
        }
      ]
    },
    quiz: [
      {
        id: "d24q1", question: "Simplify: &radic;36.",
        type: "multiple-choice",
        options: ["6","18","&plusmn;6","9"],
        correct: 0,
        explanation: "&radic;36 = <strong>6</strong> (the principal, positive square root).",
        difficulty: "easy", category: "topic"
      },
      {
        id: "d24q2", question: "Which of these is a perfect square?",
        type: "multiple-choice",
        options: ["144","120","130","150"],
        correct: 0,
        explanation: "12 &times; 12 = <strong>144</strong>. The others have no whole-number square root.",
        difficulty: "easy", category: "topic"
      },
      {
        id: "d24q3", question: "Simplify: &radic;50.",
        type: "multiple-choice",
        options: ["5&radic;2","25&radic;2","2&radic;25","10&radic;5"],
        correct: 0,
        explanation: "&radic;50 = &radic;(25 &times; 2) = 5&radic;2. Answer: <strong>5&radic;2</strong>.",
        difficulty: "easy", category: "topic"
      },
      {
        id: "d24q4", question: "Simplify: 2&radic;3 + 5&radic;3.",
        type: "multiple-choice",
        options: ["7&radic;3","7&radic;6","10&radic;3","7&radic;9"],
        correct: 0,
        explanation: "Like radicals: 2&radic;3 + 5&radic;3 = (2 + 5)&radic;3 = <strong>7&radic;3</strong>.",
        difficulty: "medium", category: "topic",
        hints: ["These two terms have the same radicand — you can combine them just like combining like terms in algebra.", "Add the coefficients in front of √3, keeping the radical part unchanged."]
      },
      {
        id: "d24q5", question: "Simplify: &radic;3 &middot; &radic;12.",
        type: "multiple-choice",
        options: ["6","4&radic;3","&radic;36","3&radic;4"],
        correct: 0,
        explanation: "&radic;3 &middot; &radic;12 = &radic;(3 &times; 12) = &radic;36 = <strong>6</strong>.",
        difficulty: "medium", category: "topic",
        hints: ["When multiplying radicals, you can combine them under one radical sign: √a · √b = √(ab).", "Multiply the radicands together: 3 × 12 = ? Then take the square root of the result."]
      },
      {
        id: "d24q6", question: "Rationalize the denominator: 4/&radic;2.",
        type: "multiple-choice",
        options: ["2&radic;2","4&radic;2","4/2","&radic;8"],
        correct: 0,
        explanation: "4/&radic;2 = (4&radic;2)/(&radic;2 &middot; &radic;2) = 4&radic;2/2 = <strong>2&radic;2</strong>.",
        difficulty: "medium", category: "topic",
        hints: ["To clear a radical from the denominator, multiply top and bottom by that same radical.", "Multiply both numerator and denominator by √2, then simplify the resulting fraction."]
      },
      {
        id: "d24q7", question: "Simplify: &radic;75 &minus; &radic;27.",
        type: "multiple-choice",
        options: ["2&radic;3","5&radic;3 &minus; 3&radic;3","&radic;48","8&radic;3"],
        correct: 0,
        explanation: "&radic;75 = 5&radic;3 and &radic;27 = 3&radic;3. So 5&radic;3 &minus; 3&radic;3 = <strong>2&radic;3</strong>.",
        difficulty: "hard", category: "topic",
        hints: ["You can't subtract radicals with different radicands directly — simplify each radical first to see if they become like terms.", "Find the largest perfect square factor in each: 75 = 25 × 3 and 27 = 9 × 3."]
      },
      {
        id: "d24q8", question: "A right triangle has legs of length 5 and 12. What is the length of the hypotenuse?",
        type: "type-answer",
        answer: "13",
        accept: ["13"],
        explanation: "c<sup>2</sup> = 5<sup>2</sup> + 12<sup>2</sup> = 25 + 144 = 169. c = &radic;169 = <strong>13</strong>.",
        difficulty: "hard", category: "topic",
        hints: ["Use the Pythagorean theorem: a² + b² = c², where c is the hypotenuse.", "Square both legs and add: 5² + 12² = 25 + 144 — then take the square root of the sum."]
      },
      {
        id: "d24q9", question: "Solve the system: x &minus; y = 2 and 3x + y = 14. (Review: Day 20)",
        type: "multiple-choice",
        options: ["(4, 2)","(2, 4)","(3, 5)","(5, 3)"],
        correct: 0,
        explanation: "Add the equations: 4x = 16 &rArr; x = 4. Then y = 4 &minus; 2 = 2. Answer: <strong>(4, 2)</strong>.",
        difficulty: "medium", category: "review",
        hints: ["Notice that one equation has −y and the other has +y — what happens if you add them?", "Adding the two equations eliminates y, leaving a simple equation in x alone."]
      },
      {
        id: "d24q10", question: "Solve the proportion: 5/8 = x/24. (Review: Day 23)",
        type: "multiple-choice",
        options: ["15","20","12","10"],
        correct: 0,
        explanation: "Cross-multiply: 8x = 120 &rArr; x = <strong>15</strong>.",
        difficulty: "medium", category: "review",
        hints: ["Use cross-multiplication to solve a proportion: multiply the diagonals.", "Cross-multiply: 8 × x = 5 × 24, then solve for x."]
      }
    ]
  },
  day25: {
    lesson: {
      title: "Rational Expressions",
      subtitle: "Fractions with polynomials — simplify, multiply, divide, and watch out for zero!",
      sections: [
        {
          heading: "What Is a Rational Expression?",
          paragraphs: [
            "A <strong>rational expression</strong> is a fraction where the numerator and denominator are polynomials. Examples include x/5, (x + 3)/(x &minus; 2), and (2x<sup>2</sup> + 1)/(x<sup>2</sup> &minus; 4). They behave a lot like regular fractions, but with variables.",
            "Think of it this way: just as 3/4 is a ratio of two integers, a rational expression is a ratio of two polynomials. The word &ldquo;rational&rdquo; comes from &ldquo;ratio.&rdquo;",
            "The most important rule: the <strong>denominator can never equal zero</strong>, because division by zero is undefined. So for (x + 3)/(x &minus; 2), we must have x &ne; 2. These forbidden values are called <strong>restricted values</strong> or <strong>excluded values</strong>."
          ]
        },
        {
          heading: "Restricted Values",
          paragraphs: [
            "To find restricted values, set the <strong>denominator equal to zero</strong> and solve. Whatever x-values make the denominator zero are excluded from the domain.",
            "For (3x)/(x<sup>2</sup> &minus; 9), the denominator factors as (x + 3)(x &minus; 3). Setting each factor to zero: x = &minus;3 or x = 3. Both are restricted values.",
            "Always state the restrictions when working with rational expressions. Even if a factor cancels during simplification, the original restriction still applies. If (x &minus; 3)/(x &minus; 3) simplifies to 1, it equals 1 for all x <strong>except</strong> x = 3."
          ],
          example: {
            title: "Worked Example: Finding Restricted Values",
            problem: "Find the restricted values of (2x + 5)/(x<sup>2</sup> &minus; x &minus; 6).",
            steps: [
              "Set the denominator equal to zero: x<sup>2</sup> &minus; x &minus; 6 = 0.",
              "Factor: (x &minus; 3)(x + 2) = 0.",
              "Solve each factor: x = 3 or x = &minus;2.",
              "Restricted values: <strong>x &ne; 3 and x &ne; &minus;2</strong>."
            ]
          }
        },
        {
          heading: "Simplifying Rational Expressions",
          paragraphs: [
            "To simplify a rational expression, <strong>factor</strong> both the numerator and the denominator completely, then <strong>cancel</strong> any common factors. This is identical to how you simplify numeric fractions: 6/8 = (2 &times; 3)/(2 &times; 4) = 3/4.",
            "Example: Simplify (x<sup>2</sup> &minus; 4)/(x<sup>2</sup> + 5x + 6). Factor the top: (x &minus; 2)(x + 2). Factor the bottom: (x + 2)(x + 3). Cancel (x + 2): result is (x &minus; 2)/(x + 3), with x &ne; &minus;2 and x &ne; &minus;3.",
            "A very common mistake is trying to cancel <em>terms</em> instead of <em>factors</em>. You <strong>cannot</strong> cancel the x<sup>2</sup> in (x<sup>2</sup> + 1)/(x<sup>2</sup> + 5) &mdash; they are terms being added, not factors being multiplied. Only factors that are multiplied across the entire numerator and denominator can be canceled."
          ],
          example: {
            title: "Worked Example: Simplifying a Rational Expression",
            problem: "Simplify: (3x<sup>2</sup> &minus; 12)/(6x + 12).",
            steps: [
              "Factor the numerator: 3x<sup>2</sup> &minus; 12 = 3(x<sup>2</sup> &minus; 4) = 3(x &minus; 2)(x + 2).",
              "Factor the denominator: 6x + 12 = 6(x + 2).",
              "Cancel the common factor (x + 2): 3(x &minus; 2)/6.",
              "Simplify the coefficient: 3/6 = 1/2.",
               "Result: <strong>(x &minus; 2)/2</strong>, where x &ne; &minus;2."
             ]
           },
           practice: [
             {
               type: "type-answer",
               prompt: "Simplify: (x&sup2; &minus; 16)/(x + 4). What is the result?",
               answer: "x-4",
               accept: ["x-4", "x - 4", "x−4", "(x-4)", "(x − 4)"],
               explanation: "Factor the numerator as a difference of squares: (x + 4)(x &minus; 4)/(x + 4). Cancel (x + 4): result is x &minus; 4, where x &ne; &minus;4."
             },
             {
               type: "type-answer",
               prompt: "What value of x is restricted (undefined) for the expression 5/(x &minus; 3)?",
               answer: "3",
               accept: ["3", "x=3", "x = 3"],
               explanation: "The denominator x &minus; 3 = 0 when x = 3, so x = 3 is the restricted value."
             },
             {
               type: "multiple-quick",
               prompt: "To simplify a rational expression, the first step is always to:",
               options: ["Factor numerator and denominator", "Cross-multiply", "Find a common denominator"],
               correct: 0,
               explanation: "Factor both the numerator and denominator completely, then cancel common factors."
             }
           ]
         },
         {
           heading: "Multiplying, Dividing & Adding Rational Expressions",
          paragraphs: [
            "To <strong>multiply</strong> rational expressions, multiply the numerators together and the denominators together &mdash; just like regular fractions. Factor everything first and cancel before multiplying to keep things simple: (a/b) &middot; (c/d) = (ac)/(bd).",
            "To <strong>divide</strong>, multiply by the reciprocal: (a/b) &divide; (c/d) = (a/b) &middot; (d/c). Flip the second fraction and multiply. Don&rsquo;t forget to factor and cancel where possible.",
            "To <strong>add or subtract</strong> rational expressions with the <strong>same denominator</strong>, combine the numerators over that common denominator: a/d + b/d = (a + b)/d. When denominators differ, you need to find a <strong>common denominator</strong> (similar to adding fractions like 1/3 + 1/4). This involves finding the LCD of the polynomial denominators."
          ]
        }
      ]
    },
    quiz: [
      {
        id: "d25q1", question: "What is the restricted value for the expression (x + 4)/(x &minus; 7)?",
        type: "multiple-choice",
        options: ["x = 7","x = &minus;4","x = 0","x = 4"],
        correct: 0,
        explanation: "The denominator is zero when x &minus; 7 = 0 &rArr; x = 7. So <strong>x &ne; 7</strong>.",
        difficulty: "easy", category: "topic"
      },
      {
        id: "d25q2", question: "Simplify: 10x<sup>3</sup>/(5x).",
        type: "multiple-choice",
        options: ["2x<sup>2</sup>","5x<sup>2</sup>","2x<sup>3</sup>","10x<sup>2</sup>"],
        correct: 0,
        explanation: "10x<sup>3</sup>/(5x) = (10/5) &middot; (x<sup>3</sup>/x) = <strong>2x<sup>2</sup></strong>.",
        difficulty: "easy", category: "topic"
      },
      {
        id: "d25q3", question: "Which of these is a rational expression?",
        type: "multiple-choice",
        options: ["(x<sup>2</sup> + 1)/(x &minus; 3)","&radic;x + 5","x<sup>1/2</sup> + 3","2<sup>x</sup>/(x + 1)"],
        correct: 0,
        explanation: "A rational expression is a ratio of <strong>polynomials</strong>. (x<sup>2</sup> + 1)/(x &minus; 3) fits this definition.",
        difficulty: "easy", category: "topic"
      },
      {
        id: "d25q4", question: "Simplify: (x<sup>2</sup> &minus; 9)/(x + 3).",
        type: "multiple-choice",
        options: ["x &minus; 3","x + 3","x<sup>2</sup> &minus; 3","x &minus; 9"],
        correct: 0,
        explanation: "Factor the numerator: (x &minus; 3)(x + 3). Cancel (x + 3): <strong>x &minus; 3</strong> (x &ne; &minus;3).",
        difficulty: "medium", category: "topic",
        hints: ["The numerator is a difference of squares — try factoring it.", "Factor x² − 9 as (x − 3)(x + 3), then see what cancels with the denominator."]
      },
      {
        id: "d25q5", question: "Find the restricted values of (5x)/(x<sup>2</sup> &minus; 4).",
        type: "multiple-choice",
        options: ["x = 2 and x = &minus;2","x = 4 and x = &minus;4","x = 0","x = 2 only"],
        correct: 0,
        explanation: "x<sup>2</sup> &minus; 4 = (x &minus; 2)(x + 2) = 0 when x = 2 or x = &minus;2. <strong>Both are restricted</strong>.",
        difficulty: "medium", category: "topic",
        hints: ["Restricted values come from setting the denominator equal to zero.", "Factor x² − 4 as a difference of squares and set each factor equal to zero."]
      },
      {
        id: "d25q6", question: "Multiply: (x/3) &middot; (9/x<sup>2</sup>).",
        type: "multiple-choice",
        options: ["3/x","9/x","3x","x/3"],
        correct: 0,
        explanation: "Multiply numerators and denominators: (x &middot; 9)/(3 &middot; x<sup>2</sup>) = 9x/(3x<sup>2</sup>) = <strong>3/x</strong> (x &ne; 0).",
        difficulty: "medium", category: "topic",
        hints: ["Multiply fractions by multiplying numerators together and denominators together.", "After multiplying, simplify by canceling common factors of x and numeric coefficients."]
      },
      {
        id: "d25q7", question: "Simplify: (2x<sup>2</sup> + 6x)/(x<sup>2</sup> + 6x + 9).",
        type: "multiple-choice",
        options: ["2x/(x + 3)","(2x + 6)/(x + 3)","2/(x + 3)","2x/(x + 9)"],
        correct: 0,
        explanation: "Factor numerator: 2x(x + 3). Factor denominator: (x + 3)<sup>2</sup>. Cancel one (x + 3): <strong>2x/(x + 3)</strong> (x &ne; &minus;3).",
        difficulty: "hard", category: "topic",
        hints: ["Factor both the numerator and denominator completely before trying to cancel anything.", "The numerator has a common factor of 2x, and the denominator is a perfect square trinomial."]
      },
      {
        id: "d25q8", question: "Divide: (x<sup>2</sup> &minus; 1)/4 &divide; (x + 1)/8.",
        type: "multiple-choice",
        options: ["2(x &minus; 1)","(x &minus; 1)/2","2(x + 1)","8(x<sup>2</sup> &minus; 1)/(4x + 4)"],
        correct: 0,
        explanation: "Flip and multiply: [(x &minus; 1)(x + 1)/4] &middot; [8/(x + 1)]. Cancel (x + 1) and simplify 8/4 = 2. Result: <strong>2(x &minus; 1)</strong> (x &ne; &minus;1).",
        difficulty: "hard", category: "topic",
        hints: ["To divide fractions, flip the second fraction and multiply instead.", "After flipping, factor x² − 1 as (x − 1)(x + 1) and cancel common factors before multiplying."]
      },
      {
        id: "d25q9", question: "y varies directly with x. If y = 21 when x = 7, find y when x = 10. (Review: Day 23)",
        type: "multiple-choice",
        options: ["30","21","70","3"],
        correct: 0,
        explanation: "k = y/x = 21/7 = 3. When x = 10: y = 3(10) = <strong>30</strong>.",
        difficulty: "medium", category: "review",
        hints: ["In direct variation y = kx, first find the constant k using the given values.", "Divide y by x to get k, then multiply k by the new x-value."]
      },
      {
        id: "d25q10", question: "Simplify: &radic;98. (Review: Day 24)",
        type: "multiple-choice",
        options: ["7&radic;2","2&radic;49","49&radic;2","14"],
        correct: 0,
        explanation: "&radic;98 = &radic;(49 &times; 2) = 7&radic;2. Answer: <strong>7&radic;2</strong>.",
        difficulty: "medium", category: "review",
        hints: ["Look for the largest perfect square that divides evenly into 98.", "98 = 49 × 2, and 49 is a perfect square — use the product rule for radicals."]
      }
    ]
  },
  day26: {
    lesson: {
      title: "Functions, Relations & Course Review",
      subtitle: "The grand finale — functions tie algebra together, plus a full course recap.",
      sections: [
        {
          heading: "What Is a Function?",
          paragraphs: [
            "A <strong>function</strong> is a special rule that assigns <strong>exactly one output</strong> to each input. Think of it like a vending machine: you press one button (the input) and get exactly one snack (the output). If pressing &ldquo;B3&rdquo; sometimes gave you chips and sometimes gave you candy, the machine wouldn&rsquo;t be a function!",
            "We write functions using <strong>function notation</strong>: f(x) = 2x + 3. This is read &ldquo;f of x equals 2x plus 3.&rdquo; The letter f is the function name, and x is the input variable. f(x) is <em>not</em> f times x &mdash; it means &ldquo;the output of function f when the input is x.&rdquo;",
            "A <strong>relation</strong> is any set of ordered pairs (x, y). A function is a <em>special type</em> of relation where no x-value repeats with different y-values. The set {(1, 3), (2, 5), (3, 7)} is a function, but {(1, 3), (1, 5), (2, 7)} is <strong>not</strong> because x = 1 maps to two different outputs."
          ]
        },
        {
          heading: "Domain, Range & the Vertical Line Test",
          paragraphs: [
            "The <strong>domain</strong> of a function is the set of all valid inputs (x-values). The <strong>range</strong> is the set of all possible outputs (y-values). For f(x) = &radic;x, the domain is x &ge; 0 (you can&rsquo;t take the square root of a negative number in real numbers), and the range is y &ge; 0.",
            "For rational expressions, remember to exclude x-values that make the denominator zero. For f(x) = 1/(x &minus; 4), the domain is all real numbers except x = 4. We combine what we learned about radicals and rational expressions to find domains.",
            "The <strong>vertical line test</strong> is a quick visual check: if any vertical line crosses a graph more than once, the graph does <em>not</em> represent a function. A circle fails the vertical line test (each x-value in the interior gives two y-values), but a parabola opening up or down passes it."
          ],
          graphs: [{"type":"row","items":[{"type":"coordPlane","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"width":240,"height":240,"points":[{"x":2,"y":0,"color":"#0ea5e9"},{"x":1.73,"y":1,"color":"#0ea5e9"},{"x":1.41,"y":1.41,"color":"#0ea5e9"},{"x":1,"y":1.73,"color":"#0ea5e9"},{"x":0,"y":2,"color":"#0ea5e9"},{"x":-1,"y":1.73,"color":"#0ea5e9"},{"x":-1.41,"y":1.41,"color":"#0ea5e9"},{"x":-1.73,"y":1,"color":"#0ea5e9"},{"x":-2,"y":0,"color":"#0ea5e9"},{"x":-1.73,"y":-1,"color":"#0ea5e9"},{"x":-1.41,"y":-1.41,"color":"#0ea5e9"},{"x":-1,"y":-1.73,"color":"#0ea5e9"},{"x":0,"y":-2,"color":"#0ea5e9"},{"x":1,"y":-1.73,"color":"#0ea5e9"},{"x":1.41,"y":-1.41,"color":"#0ea5e9"},{"x":1.73,"y":-1,"color":"#0ea5e9"}],"lines":[{"vertical":true,"x":1,"color":"#e53e3e","dashed":true,"label":"FAIL ✗"}],"caption":"Circle: vertical line hits TWO points — not a function"},{"type":"coordPlane","xMin":-4,"xMax":4,"yMin":-1,"yMax":8,"width":240,"height":240,"parabolas":[{"a":0.5,"b":0,"c":0,"color":"#22c55e","label":"y = ½x²"}],"lines":[{"vertical":true,"x":1.5,"color":"#e53e3e","dashed":true,"label":"PASS ✓"}],"caption":"Parabola: vertical line hits ONE point — is a function"}]}],
          example: {
            title: "Worked Example: Finding Domain",
            problem: "Find the domain of f(x) = 5/(x + 2).",
            steps: [
              "The function is a rational expression, so the denominator cannot be zero.",
              "Set x + 2 = 0 &rArr; x = &minus;2.",
              "The domain is all real numbers <strong>except x = &minus;2</strong>."
            ]
          }
        },
        {
          heading: "Evaluating Functions",
          paragraphs: [
            "To <strong>evaluate</strong> a function at a specific value, substitute that value for x and simplify. If f(x) = x<sup>2</sup> &minus; 3x + 1, then f(4) = 4<sup>2</sup> &minus; 3(4) + 1 = 16 &minus; 12 + 1 = 5.",
            "You can also evaluate at expressions: f(a + 1) means you replace every x with (a + 1). So f(a + 1) = (a + 1)<sup>2</sup> &minus; 3(a + 1) + 1 = a<sup>2</sup> + 2a + 1 &minus; 3a &minus; 3 + 1 = a<sup>2</sup> &minus; a &minus; 1.",
            "Function notation appears throughout science and everyday life. Physicists write d(t) for distance as a function of time. Economists write C(x) for the cost of producing x items. The notation tells you exactly which variable is the input."
          ],
          example: {
            title: "Worked Example: Evaluating a Function",
            problem: "If g(x) = 3x<sup>2</sup> &minus; 5x + 2, find g(&minus;1).",
            steps: [
              "Substitute x = &minus;1: g(&minus;1) = 3(&minus;1)<sup>2</sup> &minus; 5(&minus;1) + 2.",
              "Compute (&minus;1)<sup>2</sup> = 1, so 3(1) = 3.",
              "Compute &minus;5(&minus;1) = 5.",
               "Add: 3 + 5 + 2 = <strong>10</strong>."
             ]
           },
           practice: [
             {
               type: "type-answer",
               prompt: "If f(x) = 2x + 1, find f(4).",
               answer: "9",
               accept: ["9", "f(4)=9", "f(4) = 9"],
               explanation: "f(4) = 2(4) + 1 = 8 + 1 = 9."
             },
             {
               type: "type-answer",
               prompt: "If g(x) = x<sup>2</sup> &minus; 3, find g(&minus;2).",
               answer: "1",
               accept: ["1", "g(-2)=1", "g(-2) = 1"],
               explanation: "g(&minus;2) = (&minus;2)<sup>2</sup> &minus; 3 = 4 &minus; 3 = 1."
             },
             {
               type: "multiple-quick",
               prompt: "If f(x) = x + 5, what is f(0)?",
               options: ["5", "0", "x + 5"],
               correct: 0,
               explanation: "f(0) = 0 + 5 = 5. Substitute x = 0 into the function."
             }
           ]
         },
         {
           heading: "Course Summary: Your Algebra Journey",
          paragraphs: [
            "Congratulations &mdash; you&rsquo;ve completed a whirlwind tour of introductory algebra! Let&rsquo;s see how everything connects. We started with <strong>variables and expressions</strong> (Day 1) and the <strong>properties of real numbers</strong> (Day 2) that form algebra&rsquo;s foundation. Then we learned to solve <strong>one-step and two-step equations</strong> (Day 3), <strong>multi-step equations</strong> (Day 4), <strong>inequalities</strong> (Day 5), and <strong>absolute value</strong> (Day 6).",
            "We powered up with <strong>exponents</strong> (Days 7&ndash;8) and explored <strong>polynomials</strong> (Days 9&ndash;10), learned to <strong>factor</strong> them (Days 11&ndash;12), and solved <strong>quadratic equations</strong> (Days 13&ndash;14). We studied <strong>word problems and applications</strong> (Day 15), then moved to <strong>graphing lines</strong> (Day 16) and <strong>writing linear equations</strong> (Day 17).",
            "Most recently, we tackled <strong>systems of equations</strong> (Day 18), <strong>ratios and proportions</strong> (Day 19), <strong>radicals</strong> (Day 20), <strong>rational expressions</strong> (Day 21), and now <strong>functions</strong> (Day 22). Each topic built on the last, and together they give you the tools to model and solve real-world problems. Algebra isn&rsquo;t just a school subject &mdash; it&rsquo;s a way of thinking that you&rsquo;ll use for years to come!"
          ]
        }
      ]
    },
    quiz: [
      {
        id: "d26q1", question: "Is the relation {(2, 4), (3, 6), (4, 8)} a function?",
        type: "multiple-choice",
        options: ["Yes, each input has exactly one output","No, the outputs are all different","No, because it only has 3 pairs","Yes, but only if we add more pairs"],
        correct: 0,
        explanation: "Each x-value (2, 3, 4) maps to exactly one y-value. <strong>Yes, it is a function</strong>.",
        difficulty: "easy", category: "topic"
      },
      {
        id: "d26q2", question: "If f(x) = 4x &minus; 1, find f(3).",
        type: "multiple-choice",
        options: ["11","12","7","13"],
        correct: 0,
        explanation: "f(3) = 4(3) &minus; 1 = 12 &minus; 1 = <strong>11</strong>.",
        difficulty: "easy", category: "topic"
      },
      {
        id: "d26q3", question: "What is the domain of f(x) = 1/(x &minus; 5)?",
        type: "multiple-choice",
        options: ["All real numbers except x = 5","All real numbers except x = &minus;5","All real numbers","x &gt; 5 only"],
        correct: 0,
        explanation: "The denominator x &minus; 5 = 0 when x = 5. Domain: <strong>all reals except x = 5</strong>.",
        difficulty: "easy", category: "topic"
      },
      {
        id: "d26q4", question: "If g(x) = x<sup>2</sup> + 2x, find g(&minus;3).",
        type: "multiple-choice",
        options: ["3","15","&minus;3","9"],
        correct: 0,
        explanation: "g(&minus;3) = (&minus;3)<sup>2</sup> + 2(&minus;3) = 9 &minus; 6 = <strong>3</strong>.",
        difficulty: "medium", category: "topic",
        hints: ["To evaluate a function, replace every x in the formula with the given input value.", "Substitute −3 for x: be careful with the sign when squaring a negative number."]
      },
      {
        id: "d26q5", question: "Which graph would <em>fail</em> the vertical line test?",
        type: "multiple-choice",
        options: ["A circle","A parabola opening upward","A straight line with slope 2","A V-shaped graph (absolute value)"],
        correct: 0,
        explanation: "A <strong>circle</strong> has two y-values for most x-values, so it fails the vertical line test and is not a function.",
        difficulty: "medium", category: "topic",
        hints: ["The vertical line test fails when a single x-value can produce more than one y-value.", "Think about which of these shapes has points directly above and below each other."]
      },
      {
        id: "d26q6", question: "If f(x) = 2x + 5, what is f(a + 2)?",
        type: "multiple-choice",
        options: ["2a + 9","2a + 7","2a + 5","a + 7"],
        correct: 0,
        explanation: "Replace x with (a + 2): f(a + 2) = 2(a + 2) + 5 = 2a + 4 + 5 = <strong>2a + 9</strong>.",
        difficulty: "medium", category: "topic",
        hints: ["Wherever you see x in the function formula, replace it with the entire expression (a + 2).", "After substituting, distribute the 2 across (a + 2) and then combine the constant terms."]
      },
      {
        id: "d26q7", question: "The relation {(1, 2), (2, 4), (1, 6), (3, 8)} is:",
        type: "multiple-choice",
        options: ["Not a function, because x = 1 maps to two outputs","A function, because all y-values are different","A function, because it has four ordered pairs","Not a function, because the y-values are even"],
        correct: 0,
        explanation: "x = 1 maps to both 2 and 6 &mdash; two different outputs. This <strong>is not a function</strong>.",
        difficulty: "hard", category: "topic",
        hints: ["A function requires that each input (x-value) maps to exactly one output — check if any x-value appears more than once.", "Look at the x-values in the ordered pairs: do any repeat with different y-values?"]
      },
      {
        id: "d26q8", question: "If h(x) = 3x<sup>2</sup> &minus; x + 4, find h(0) + h(1).",
        type: "multiple-choice",
        options: ["10","4","6","7"],
        correct: 0,
        explanation: "h(0) = 3(0) &minus; 0 + 4 = 4. h(1) = 3(1) &minus; 1 + 4 = 6. Sum: 4 + 6 = <strong>10</strong>.",
        difficulty: "hard", category: "topic",
        hints: ["Evaluate h(0) and h(1) separately, then add the two results together.", "Start with h(0) — substituting 0 for x simplifies things a lot since any term with x becomes zero."]
      },
      {
        id: "d26q9", question: "Simplify: (x<sup>2</sup> &minus; 16)/(x + 4). (Review: Day 25)",
        type: "multiple-choice",
        options: ["x &minus; 4","x + 4","x<sup>2</sup> &minus; 4","x &minus; 16"],
        correct: 0,
        explanation: "Factor numerator: (x &minus; 4)(x + 4). Cancel (x + 4): <strong>x &minus; 4</strong> (x &ne; &minus;4).",
        difficulty: "medium", category: "review",
        hints: ["The numerator is a difference of squares — try factoring it into two binomials.", "Factor x² − 16 as (x − 4)(x + 4), then cancel the factor that matches the denominator."]
      },
      {
        id: "d26q10", question: "Solve: 3(2x &minus; 1) + 4 = 19. (Review: Day 4)",
        type: "multiple-choice",
        options: ["x = 3","x = 4","x = 2","x = 5"],
        correct: 0,
        explanation: "Distribute: 6x &minus; 3 + 4 = 19 &rArr; 6x + 1 = 19 &rArr; 6x = 18 &rArr; x = <strong>3</strong>.",
        difficulty: "medium", category: "review",
        hints: ["Start by distributing the 3 across the parentheses, then combine like terms.", "After distributing, you get 6x − 3 + 4 = 19 — simplify the left side and isolate x."]
      }
    ]
  }
};
