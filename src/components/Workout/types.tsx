export interface WorkoutProps {
  id: number
  title: string
  subtitle: string
  amount: string
  date: string
  art: {
    icon: string
    background: string
  }
}

export interface WorkoutSectionProps {
  data: Array<WorkoutProps>
}

export interface WorkoutAviProps {
  icon: any
  background: string
}
