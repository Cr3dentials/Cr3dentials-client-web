export function calculateFirstPaymentDate(offset: number) {
  const now = new Date()
  let resultDate = new Date(now)

  if (offset === 0) {
    resultDate.setDate(resultDate.getDate() + 7) // One week
  } else if (offset === 1) {
    resultDate.setDate(resultDate.getDate() + 14) // Two weeks
  } else if (offset === 2) {
    resultDate.setMonth(resultDate.getMonth() + 1) // One month
  } else {
    throw new Error(
      'Invalid offset. Please provide 0 for week, 1 for bi-week, or 2 for month.',
    )
  }
  return resultDate
}

export function calculateDuePaymentDate(
  offset: number,
  numOfInvoiceItems: number,
) {
  const now = new Date()
  let resultDate = new Date(now)

  if (offset === 0) {
    resultDate.setDate(resultDate.getDate() + 7 * numOfInvoiceItems) // One week
  } else if (offset === 1) {
    resultDate.setDate(resultDate.getDate() + 14 * numOfInvoiceItems) // Two weeks
  } else if (offset === 2) {
    resultDate.setMonth(resultDate.getMonth() + 1 * numOfInvoiceItems) // One month
  } else {
    throw new Error(
      'Invalid offset. Please provide 0 for week, 1 for bi-week, or 2 for month.',
    )
  }
  return resultDate
}

export function getNumberOfPayments(frequency: number, dueDate: Date): number {
  const currentDate = new Date()
  let numberOfPayments = 0

  switch (frequency) {
    case 0: // Weekly
      while (currentDate < dueDate) {
        currentDate.setDate(currentDate.getDate() + 7)
        numberOfPayments++
      }
      break
    case 1: // Biweekly
      while (currentDate < dueDate) {
        currentDate.setDate(currentDate.getDate() + 14)
        numberOfPayments++
      }
      break
    case 2: // Monthly
      while (currentDate < dueDate) {
        currentDate.setMonth(currentDate.getMonth() + 1)
        numberOfPayments++
      }
      break
    default:
      console.log('Invalid frequency')
      break
  }

  return numberOfPayments
}

export function generateRandomString() {
  let result = ''
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  const charactersLength = characters.length

  for (let i = 0; i < 5; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }

  return result
}

export function generateRandomNumber() {
  // Generate a random number between 10000 and 99999
  return Math.floor(Math.random() * 90000) + 10000
}
