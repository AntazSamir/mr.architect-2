import * as React from "react"
import { motion } from "framer-motion"
import { Check, X } from "lucide-react"

interface PasswordStrengthIndicatorProps {
  password: string
}

const criteria = [
  { label: "8+ characters", test: (p: string) => p.length >= 8 },
  { label: "Uppercase letter", test: (p: string) => /[A-Z]/.test(p) },
  { label: "Lowercase letter", test: (p: string) => /[a-z]/.test(p) },
  { label: "Number", test: (p: string) => /[0-9]/.test(p) },
  { label: "Special character", test: (p: string) => /[!@#$%^&*(),.?":{}|<>]/.test(p) },
]

const getStrengthLevel = (score: number): { label: string; color: string } => {
  if (score === 0) return { label: "", color: "bg-muted" }
  if (score <= 2) return { label: "Weak", color: "bg-destructive" }
  if (score <= 3) return { label: "Fair", color: "bg-warning" }
  if (score <= 4) return { label: "Good", color: "bg-primary" }
  return { label: "Strong", color: "bg-success" }
}

export const PasswordStrengthIndicator: React.FC<PasswordStrengthIndicatorProps> = ({ password }) => {
  const score = criteria.filter(c => c.test(password)).length
  const strength = getStrengthLevel(score)

  if (!password) return null

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.2 }}
      className="mt-2 space-y-3"
    >
      {/* Strength Bar */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">Password strength</span>
          <span className={`text-xs font-medium ${
            score <= 2 ? "text-destructive" : 
            score <= 3 ? "text-warning" : 
            score <= 4 ? "text-primary" : "text-success"
          }`}>
            {strength.label}
          </span>
        </div>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((level) => (
            <motion.div
              key={level}
              className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
                level <= score ? strength.color : "bg-muted"
              }`}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.2, delay: level * 0.05 }}
            />
          ))}
        </div>
      </div>

      {/* Criteria Checklist */}
      <div className="grid grid-cols-2 gap-x-2 gap-y-1">
        {criteria.map((criterion, index) => {
          const passed = criterion.test(password)
          return (
            <motion.div
              key={criterion.label}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: index * 0.03 }}
              className="flex items-center gap-1.5"
            >
              {passed ? (
                <Check className="h-3 w-3 text-success" />
              ) : (
                <X className="h-3 w-3 text-muted-foreground/50" />
              )}
              <span className={`text-xs ${passed ? "text-foreground" : "text-muted-foreground/50"}`}>
                {criterion.label}
              </span>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}
