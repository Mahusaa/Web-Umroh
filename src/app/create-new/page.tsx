"use client"

"use client"

import { useState } from "react"
import type { FormEvent } from "react"
import { Button } from "~/components/ui/button"
import { Form1 } from "~/components/form/Form1"
import { Form2 } from "~/components/form/Form2"
import { Form3 } from "~/components/form/Form3"

const TOTAL_STEPS = 5;

export default function Component() {
  const [currentStep, setCurrentStep] = useState(1)

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, TOTAL_STEPS))
  }

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted")
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <Form1 />
      case 2:
        return <Form2 />
      case 3:
        return <Form3 />
      case 4:
      case 5:
        return <div>Hello</div>
      default:
        return null
    }
  }

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center">
        <div className="w-full max-w-2xl">
          <div className="mb-8">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-10">
                {Array.from({ length: TOTAL_STEPS }, (_, i) => i + 1).map((step) => (
                  <div
                    key={step}
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${step === currentStep ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                      }`}
                  >
                    {step}
                  </div>
                ))}
              </div>
              <span className="text-sm font-medium text-muted-foreground">Step {currentStep} of {TOTAL_STEPS}</span>
            </div>
            <div className="h-1 bg-muted rounded-full mt-4">
              <div
                className="h-full bg-primary rounded-full"
                style={{ width: `${(currentStep / TOTAL_STEPS) * 100}%` }}
              />
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="space-y-6 w-full">
              {renderStepContent()}
            </div>
            <div className="flex justify-between mt-8">
              {currentStep > 1 && (
                <Button type="button" variant="outline" onClick={handlePrev}>
                  Previous
                </Button>
              )}
              {currentStep < TOTAL_STEPS ? (
                <Button type="button" onClick={handleNext}>Next</Button>
              ) : (
                <Button type="submit">Submit</Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
