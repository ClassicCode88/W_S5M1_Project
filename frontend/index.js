function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
    const widgets = document.querySelectorAll('section>div')
    widgets.forEach(widget => {
      widget.classList.add('widget')
      widget.setAttribute(tabindex, idx + 1 + "")
    }) 

  // 👉 TASK 2 - Build a "Quote of the Day" widget
    const randomIdx = Math.floor(Math.random() * quotes.length)
    const randomQuotes = quotes[randomIdx]
    const quote = document.createElement('div')
    const quoteText = randomQuote.quote
    quote.textContent = quoteText
    const widget1 = document.querySelector(.quote)
    widget1.appendChild(quote)
    const authorDate = document.createElement('div')
    const { author, date} = randomQuote
    authorDate.textContent = `${author} in ${date} || "in an unknown date"`
    widget1.appendChild(authorDate)

  // 👉 TASK 3 - Build a "Corporate Speak" widget
       const randomVerb1 = verbs[Math.floor(Math.random() * verbs.length)]
        const randomVerb2 = verbs[Math.floor(Math.random() * verbs.length)]
        const randomAdverb1 = adverbs[Math.floor(Math.random() * adverbs.length)]
        const randomAdverb2 = adverbs[Math.floor(Math.random() *adverbs.length)]
        const randomNoun1 = nouns[Math.floor(Math.random() * nouns.length)]
        const randomNoun2 = nouns[Math.floor(Math.random() * nouns.length)]

        document.querySelector('.corporatespeak')
        const mumboJumbo= `We need to ${randomVerb1} our ${randomNoun1} ${randomAdverb1} in order to ${randomVerb2} or ${randomNoun2}${randomAdverb2}.`
        const paragraph = document.createElement('p')
        paragraph.textContent = mumboJumbo
        document.querySelector('.corporatespeak').appendChild(paragraph)

  // 👉 TASK 4 - Build a "Countdown" widget
   const countdownWidget = document.querySelector(.'countdown')
    let count = 5
    const countdown = document.createElement('p')
    countdown.textContent = `T minus ${count}...`
    countdownWidget.appendChild(countDown)

    const id = setInterval(() => {
      if (count === 1){
        countdown.textContent = 'LiftOff'
        clearInterval(id)
      } else {
        countdown.textContent = `T-minus ${--count}...`
      }
    } , 1000)

  // 👉 TASK 5 - Build a "Friends" widget
     const person = people[Math.floor(Math.random() * people.length)]
      const personParagraph = document.createElement('p')
      document.querySelector('friends').appendChild(personParagraph)
      const year = person.dateOfBirth.split('_')[0]
      let sentance = `${person.fname} ${person.lname} was born in ${year} and`
      

      if (!person.friends){
        sentance += 'has no friends.'
      } else {
        sentance+= 'is friends with others'
      }

      for (let idx = 0; idx < person.friends; idx++){
        const friendID = person.friends[idx]
        cosnt friend = people .find(p => p.id === friendID)
        const fullName = `${friend.fName} ${friend.lname}`
      } 
      let isLastIdx = idx === person.friends.length - 1
      let isNextToLastIdx = idx ===person.friends.length -2
      if(isLastIdx){
        sentance += `${fullName}.`
        else if (isNextToLastIdx){
          sentance += `${fullName} and`
          else{
            sentance += `$(fullName),`

          }
        }
      } 


      personParagraph.textContent = sentance
      
      
      
      
      personParagraph.textContent = `${person.fname} ${person.lname} was born in ${year} and`




      // 👉 TASK 6 - Make it so user can tab through the widgets
  

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
