const accordionDataList = [
   
    [
        {
          question: "What's Included?",
          answer: `
            <ul>
              <li>Discovery Session & Questionnaire</li>
              <li>Strategy Questionnaire</li>
              <li>Moodboard & Creative Direction (2 Concepts)</li>
              <li>Mini Strategy Presentation:</li>
              <ul>
                <li>Competitor Analysis</li>
                <li>Competitive Advantage</li>
              </ul>
              <li>Logo Suite (Primary Logo, Secondary Logo, Submark)</li>
              <li>Color Palette</li>
              <li>Typography Pairing (*Font license not included)</li>
              <li>Brand Pattern</li>
              <li>Brand Elements</li>
              <li>Mini Brand Cheat Sheet</li>
              <li>Brand Guidelines Document</li>
              <li>Bonus:</li>
              <ul>
                <li>3 Instagram Post Templates</li>
                <li>3 Instagram Story Templates</li>
                <li>Highlight Covers</li>
              </ul>
              <li>Deliverables: 2 Initial Concepts</li>
            </ul>
          `,
        },
        {
          question: "Timeline & Revisions",
          answer: `
            <p>3 Rounds of Revisions</p>
            <p>5-6 Week Turnaround</p>
          `,
        },
        {
          question: "Investment",
          answer: `<p>₹9999</p>`,
        },
      ],
    [
      {
        question: "What's Included?",
        answer: `
          <ul>
            <li>Discovery Questionnaire</li>
            <li>Moodboard & Creative Direction (2 Concepts)</li>
            <li>Logo Suite (Primary Logo, Secondary Logo, Submark)</li>
            <li>Color Palette</li>
            <li>Typography Pairing (*Font license not included)</li>
            <li>Mini Brand Cheat Sheet</li>
            <li>Bonus:</li>
            <ul>
              <li>5 Highlight Covers</li>
            </ul>
            <li>Deliverables: 1-2 Initial Concepts</li>
          </ul>
        `,
      },
      {
        question: "Timeline & Revisions",
        answer: `
          <p>2 Rounds of Revisions</p>
          <p>3-4 Week Turnaround</p>
        `,
      },
      {
        question: "Investment",
        answer: `<p>₹7,999</p>`,
      },
    ],
    [
      {
        question: "What's Included?",
        answer: `
          <ul>
            <li>Discovery Session & Questionnaire</li>
            <li>Strategy Questionnaire</li>
            <li>Moodboard & Creative Direction (2 Concepts)</li>
            <li>Mini Strategy Presentation:</li>
            <ul>
              <li>Competitor Analysis</li>
              <li>Competitive Advantage</li>
            </ul>
            <li>Logo Suite (Primary Logo, Secondary Logo, Submark)</li>
            <li>Color Palette</li>
            <li>Typography Pairing (*Font license not included)</li>
            <li>Brand Pattern</li>
            <li>Brand Elements</li>
            <li>Mini Brand Cheat Sheet</li>
            <li>Brand Guidelines Document</li>
            <li>Bonus:</li>
            <ul>
              <li>5 Instagram Post Templates</li>
              <li>5 Instagram Story Templates</li>
              <li>Highlight Covers</li>
            </ul>
            <li>Deliverables: 3 Initial Concepts</li>
          </ul>
        `,
      },
      {
        question: "Timeline & Revisions",
        answer: `
          <p>4 Rounds of Revisions</p>
          <p>6-7 Week Turnaround</p>
        `,
      },
      {
        question: "Investment",
        answer: `<p>₹14,999</p>`,
      },
    ], [
      {
        question: "Print Materials",
        answer: `
          <ul>
            <li>Flyers</li>
            <li>Brochures</li>
            <li>Posters</li>
          </ul>
          <p><strong>Investment:</strong> ₹4,999</p>
        `,
      },
      {
        question: "Social Media Designs",
        answer: `
          <ul>
            <li>Social Media Templates (More Post & Story)</li>
            <li>Instagram Highlights Cover</li>
          </ul>
          <p><strong>Investment:</strong> ₹4,999</p>
        `,
      },
      {
        question: "Stationery Set",
        answer: `
          <ul>
            <li>Business Cards</li>
            <li>Thank You Cards</li>
          </ul>
          <p><strong>Investment:</strong> ₹2,999</p>
        `,
      },
    ],
  ];
  
  function createAccordion(containerId, accordionData) {
    const accordion = document.querySelector(`#${containerId}`);
  
    accordionData.forEach((item, index) => {
      // Create accordion item container
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("accordion-item");
      itemDiv.setAttribute("data-index", index);
  
      // Create question element
      const questionDiv = document.createElement("div");
      questionDiv.classList.add("question");
      questionDiv.textContent = item.question;
  
      // Create icon element
      const iconDiv = document.createElement("div");
      iconDiv.classList.add("icon");
      iconDiv.textContent = "+";
  
      // Create answer element
      const answerDiv = document.createElement("div");
      answerDiv.classList.add("answer");
      answerDiv.innerHTML = item.answer; // Use innerHTML for formatted content
  
      // Append question and icon to itemDiv
      itemDiv.appendChild(questionDiv);
      itemDiv.appendChild(iconDiv);
  
      // Append answerDiv after itemDiv
      accordion.appendChild(itemDiv);
      accordion.appendChild(answerDiv);
  
      // Add event listener to toggle answer visibility
      itemDiv.addEventListener("click", () => {
        const isOpen = answerDiv.classList.contains("open");
  
        // Close all open answers in the same accordion
        accordion.querySelectorAll(".answer").forEach((ans) => {
          ans.classList.remove("open");
          ans.style.height = "0";
        });
        accordion.querySelectorAll(".icon").forEach((icon) =>
          icon.classList.remove("rotate")
        );
  
        if (!isOpen) {
          answerDiv.classList.add("open");
          answerDiv.style.height = `${answerDiv.scrollHeight}px`;
          iconDiv.classList.add("rotate");
        }
      });
    });
  }
    

createAccordion('accordion1', accordionDataList[1]);
  createAccordion('accordion2', accordionDataList[0]);
  createAccordion('accordion3', accordionDataList[2]);
  createAccordion('accordion4', accordionDataList[3]);