"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { calculatePasswordStrength } from "@/lib/password-strength"

export default function PasswordStrengthTester() {
  const [password, setPassword] = useState("")
  const { score, feedback } = calculatePasswordStrength(password)

  const getStrengthColor = (score: number) => {
    if (score < 25) return "bg-red-500"
    if (score < 50) return "bg-orange-500"
    if (score < 75) return "bg-yellow-500"
    return "bg-green-500"
  }

  const getStrengthLabel = (score: number) => {
    if (score < 25) return "Weak"
    if (score < 50) return "Fair"
    if (score < 75) return "Good"
    return "Strong"
  }

  return (
    <div className="w-full max-w-md space-y-4">
      <Input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Progress value={score} className={`h-2 w-full ${getStrengthColor(score)}`} />
      <div className="text-sm font-medium">{getStrengthLabel(score)}</div>
      {feedback.length > 0 && (
        <ul className="list-disc pl-5 text-sm">
          {feedback.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

