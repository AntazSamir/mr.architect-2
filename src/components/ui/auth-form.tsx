import * as React from "react"
import { ChevronLeft, Github, Twitter } from "lucide-react"
import { motion } from "framer-motion"
import { Link, useNavigate } from "react-router-dom"

interface AuthFormProps {
  mode?: "signin" | "signup"
}

const AuthForm: React.FC<AuthFormProps> = ({ mode = "signin" }) => {
  return (
    <div className="bg-background min-h-screen flex items-center justify-center text-foreground selection:bg-primary/30 relative overflow-hidden">
      <BackButton />
      {/* Base Grid Pattern overlaid on screen */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.25, ease: "easeInOut" }}
        className="relative z-10 mx-auto w-full max-w-md p-6 glass-card rounded-2xl shadow-elegant"
      >
        <Logo />
        <Header mode={mode} />
        <SocialButtons mode={mode} />
        <Divider />
        <LoginForm mode={mode} />
        <TermsAndConditions />
      </motion.div>
      <BackgroundDecoration />
    </div>
  )
}

const BackButton: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="absolute top-6 left-6 z-20">
      <SocialButton icon={<ChevronLeft size={16} />} onClick={() => navigate(-1)}>Go back</SocialButton>
    </div>
  )
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => (
  <button
    className={`rounded-lg bg-gradient-to-r from-primary to-accent px-4 py-2 text-lg font-bold text-primary-foreground 
    shadow-lg hover:shadow-glow-cyan transition-all hover:scale-[1.02] active:scale-[0.98] 
    disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    {...props}
  >
    {children}
  </button>
)

const Logo: React.FC = () => null;

const Header: React.FC<{ mode: "signin" | "signup" }> = ({ mode }) => (
  <div className="mb-6 text-center">
    <h1 className="text-2xl font-semibold tracking-tight text-foreground">
      {mode === "signin" ? "Welcome back" : "Create an account"}
    </h1>
    <p className="mt-2 text-sm text-muted-foreground">
      {mode === "signin" ? "Don't have an account? " : "Already have an account? "}
      <Link
        to={mode === "signin" ? "/signup" : "/signin"}
        className="text-primary hover:text-accent transition-colors font-medium hover:underline underline-offset-4"
      >
        {mode === "signin" ? "Create one" : "Sign in"}
      </Link>
    </p>
  </div>
)

const SocialButtons: React.FC<{ mode: "signin" | "signup" }> = ({ mode }) => (
  <div className="mb-6 space-y-3">
    <div className="grid grid-cols-2 gap-3">
      <SocialButton icon={<Twitter size={18} />} />
      <SocialButton icon={<Github size={18} />} />
      <SocialButton fullWidth>
        {mode === "signin" ? "Sign in with SSO" : "Sign up with SSO"}
      </SocialButton>
    </div>
  </div>
)

const SocialButton: React.FC<{
  icon?: React.ReactNode
  fullWidth?: boolean
  children?: React.ReactNode
  onClick?: () => void
}> = ({ icon, fullWidth, children, onClick }) => (
  <button
    onClick={onClick}
    type="button"
    className={`relative flex items-center justify-center gap-2 rounded-lg 
    border border-border bg-card/50 px-4 py-2 font-medium text-foreground transition-all duration-300
    hover:bg-accent/10 hover:border-accent/50 hover:text-accent hover:shadow-glow-violet
    active:scale-95 text-sm
    ${fullWidth ? "col-span-2" : ""}`}
  >
    {icon}
    <span>{children}</span>
  </button>
)

const Divider: React.FC = () => (
  <div className="my-6 flex items-center gap-3">
    <div className="h-[1px] w-full bg-border" />
    <span className="text-xs text-muted-foreground font-medium uppercase">OR</span>
    <div className="h-[1px] w-full bg-border" />
  </div>
)

const LoginForm: React.FC<{ mode: "signin" | "signup" }> = ({ mode }) => {
  const handleSubmit = (e: React.FormEvent) => e.preventDefault()

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {mode === "signup" && (
        <div className="space-y-1.5">
          <label
            htmlFor="name-input"
            className="block text-sm font-medium text-muted-foreground"
          >
            Full Name
          </label>
          <input
            id="name-input"
            type="text"
            placeholder="John Doe"
            className="w-full rounded-lg border border-input bg-secondary/50 px-3 py-2 text-foreground
            placeholder:text-muted-foreground/50
            focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all duration-200"
          />
        </div>
      )}
      <div className="space-y-1.5">
        <label
          htmlFor="email-input"
          className="block text-sm font-medium text-muted-foreground"
        >
          Email
        </label>
        <input
          id="email-input"
          type="email"
          placeholder="your.email@provider.com"
          className="w-full rounded-lg border border-input bg-secondary/50 px-3 py-2 text-foreground
          placeholder:text-muted-foreground/50
          focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all duration-200"
        />
      </div>
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <label
            htmlFor="password-input"
            className="block text-sm font-medium text-muted-foreground"
          >
            Password
          </label>
          {mode === "signin" && (
            <a href="#" className="text-xs text-primary hover:text-accent transition-colors">
              Forgot password?
            </a>
          )}
        </div>
        <input
          id="password-input"
          type="password"
          placeholder="••••••••••••"
          className="w-full rounded-lg border border-input bg-secondary/50 px-3 py-2 text-foreground
          placeholder:text-muted-foreground/50
          focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all duration-200"
        />
      </div>
      <Button type="submit" className="w-full mt-2">
        {mode === "signin" ? "Sign in" : "Sign up"}
      </Button>
    </form>
  )
}

const TermsAndConditions: React.FC = () => (
  <p className="mt-6 text-xs text-muted-foreground text-center">
    By continuing, you agree to our{" "}
    <Link to="/terms" className="text-primary hover:text-accent underline underline-offset-2">
      Terms
    </Link>{" "}
    and{" "}
    <Link to="/terms" className="text-primary hover:text-accent underline underline-offset-2">
      Privacy Policy
    </Link>
    .
  </p>
)

const BackgroundDecoration: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Restored SVG Grid - Recolored to Cyan */}
      <div
        className="absolute right-0 top-0 h-[50vw] w-[50vw] opacity-40 mix-blend-screen"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='2' stroke='rgba(34, 211, 238, 0.4)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at top right, transparent 0%, hsl(var(--background)) 70%)"
          }}
        />
      </div>

      {/* Top Right Glow */}
      <div className="absolute -top-[20%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-primary/10 blur-[100px]" />
      {/* Bottom Left Glow */}
      <div className="absolute -bottom-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-accent/10 blur-[100px]" />
    </div>
  )
}

export default AuthForm
