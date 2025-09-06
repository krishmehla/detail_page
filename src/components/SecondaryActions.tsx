import React from 'react';
import { 
  Download, 
  Phone, 
  Share2, 
  Heart, 
  BarChart3 
} from 'lucide-react';

export const SecondaryActions: React.FC = () => {
  const actions = [
    {
      icon: Download,
      label: 'PDF Download',
      action: () => console.log('Download PDF')
    },
    {
      icon: Phone,
      label: 'Anrufen',
      action: () => console.log('Call dealer')
    },
    {
      icon: Share2,
      label: 'Teilen',
      action: () => console.log('Share vehicle')
    },
    {
      icon: Heart,
      label: 'Merken',
      action: () => console.log('Save vehicle')
    },
    {
      icon: BarChart3,
      label: 'Vergleichen',
      action: () => console.log('Compare vehicle')
    }
  ];

  return (
    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
      {actions.map((action, index) => {
        const IconComponent = action.icon;
        return (
          <button
            key={index}
            onClick={action.action}
            className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-200 text-sm"
          >
            <IconComponent className="w-4 h-4" />
            <span className="hidden sm:inline">{action.label}</span>
          </button>
        );
      })}
    </div>
  );
};