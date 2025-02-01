export function calculatePasswordStrength(password: string): { score: number; feedback: string[] } {
  let score = 0
  const feedback: string[] = []

  // Check password length
  if (password.length < 8) {
    feedback.push("Password should be at least 8 characters long")
  } else {
    score += 25
  }

  // Check for uppercase letters
  if (/[A-Z]/.test(password)) {
    score += 25
  } else {
    feedback.push("Include uppercase letters")
  }

  // Check for lowercase letters
  if (/[a-z]/.test(password)) {
    score += 25
  } else {
    feedback.push("Include lowercase letters")
  }

  // Check for numbers
  if (/\d/.test(password)) {
    score += 25
  } else {
    feedback.push("Include numbers")
  }

  // Check for special characters
  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    score += 25
  } else {
    feedback.push("Include special characters")
  }

  // Bonus points for length
  score += Math.min(password.length - 8, 25)

  // Cap the score at 100
  score = Math.min(score, 100)

  return { score, feedback }
}

