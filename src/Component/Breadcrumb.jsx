import { Link, useLocation } from 'react-router-dom'

const nameMap = {
  'services': 'Services',
  'health-Insurance': 'Health Insurance',
  'home-Insurance': 'Home Insurance',
  'life-Insurance': 'Life Insurance',
  'travel-Insurance': 'Travel Insurance',
  'vehicle-Insurance': 'Vehicle Insurance',
  'about': 'About',
  'contact': 'Contact',
}

export default function Breadcrumb() {
  const { pathname } = useLocation()

  // Don't show breadcrumb on homepage
  if (pathname === '/') return null

  const segments = pathname.split('/').filter(Boolean)

  return (
    <div className="bg-[#f8f9ff] px-8 py-4 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm font-medium">

        <Link to="/" className="text-gray-500 hover:text-[#7800ce]">
          Home
        </Link>

        {segments.map((seg, index) => {
          const path = '/' + segments.slice(0, index + 1).join('/')
          const isLast = index === segments.length - 1
          const label = nameMap[seg] || seg

          return (
            <span key={path} className="flex items-center gap-2">
              <span className="text-gray-400">›</span>
              {isLast ? (
                <span className="text-[#7800ce]">{label}</span>
              ) : (
                <Link to={path} className="text-gray-500 hover:text-[#7800ce]">
                  {label}
                </Link>
              )}
            </span>
          )
        })}

      </div>
    </div>
  )
}