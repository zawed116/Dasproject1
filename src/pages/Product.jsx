import { useParams } from 'react-router-dom'

const Product = () => {
  const { section } = useParams()

  const content = {
    features: {
      title: "Product Features",
      description: "Explore all the powerful features our product offers."
    },
    solutions: {
      title: "Product Solutions",
      description: "See how our product can solve your business challenges."
    },
    default: {
      title: "Our Product",
      description: "Learn about our amazing product offerings."
    }
  }

  const current = section ? content[section] || content.default : content.default

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">{current.title}</h1>
        <p className="mt-4 text-lg text-gray-600">{current.description}</p>
      </div>
    </div>
  )
}

export default Product