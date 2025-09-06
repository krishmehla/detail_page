# Auto Detail Page WordPress Plugin

A modern, responsive auto detail page plugin for car dealers built with HTML, CSS, and jQuery.

## Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Image Gallery**: Touch-enabled gallery with thumbnails and navigation
- **Pricing Calculator**: Interactive financing and leasing calculator
- **Contact Forms**: AJAX-powered contact forms with validation
- **Sticky Navigation**: Context-aware sticky bars for better UX
- **Modal Windows**: Accessible modal dialogs for detailed information
- **Touch Gestures**: Swipe navigation for mobile devices

## Installation

1. Upload the `auto-detail-page` folder to your `/wp-content/plugins/` directory
2. Activate the plugin through the 'Plugins' menu in WordPress
3. Use the shortcode `[auto_detail_page]` to display the auto detail page

## Usage

### Basic Shortcode
```php
[auto_detail_page]
```

### With Vehicle ID
```php
[auto_detail_page vehicle_id="123"]
```

## File Structure

```
auto-detail-page/
├── auto-detail-page.php          # Main plugin file
├── assets/
│   ├── css/
│   │   └── styles.css             # All CSS styles
│   └── js/
│       └── scripts.js             # jQuery functionality
├── templates/
│   ├── main-template.php          # Main template
│   └── components/
│       ├── pricing-box.php        # Pricing component
│       ├── image-gallery.php      # Image gallery
│       ├── contact-form.php       # Contact form
│       └── vehicle-specs.php      # Vehicle specifications
└── README.md
```

## Customization

### CSS Customization
All styles are contained in `assets/css/styles.css`. The CSS uses a prefix system (`adp-`) to avoid conflicts with theme styles.

### JavaScript Customization
All interactive functionality is in `assets/js/scripts.js`. The code is modular and well-documented for easy modification.

### Template Customization
Templates are located in the `templates/` directory and can be modified to match your design requirements.

## Key Components

### 1. Image Gallery
- Touch-enabled swipe navigation
- Thumbnail navigation
- Keyboard arrow key support
- Mobile-optimized dot indicators

### 2. Pricing Box
- Tab-based pricing options (Purchase, Financing, Leasing)
- Interactive financing calculator
- Real-time payment calculations
- Modal with detailed breakdown

### 3. Contact Form
- AJAX form submission
- Client-side validation
- Interest selection buttons
- GDPR compliance notice

### 4. Sticky Navigation
- Context-aware visibility
- Mobile and desktop optimized
- Smooth animations

## Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

## WordPress Compatibility

- WordPress 5.0+
- PHP 7.4+
- jQuery 3.0+ (included with WordPress)

## Performance

- Optimized CSS with minimal specificity
- Efficient jQuery event handling
- Lazy loading ready
- Mobile-first responsive design

## Security

- AJAX nonce verification
- Input sanitization
- XSS protection
- CSRF protection

## Hooks and Filters

### Actions
- `adp_before_main_content` - Before main content
- `adp_after_main_content` - After main content
- `adp_form_submitted` - After form submission

### Filters
- `adp_vehicle_data` - Filter vehicle data
- `adp_contact_form_fields` - Modify form fields
- `adp_pricing_options` - Customize pricing options

## Development

### Adding New Components
1. Create a new PHP file in `templates/components/`
2. Include it in `main-template.php`
3. Add corresponding CSS classes with `adp-` prefix
4. Add JavaScript functionality if needed

### Styling Guidelines
- Use the `adp-` prefix for all CSS classes
- Follow mobile-first responsive design
- Use CSS custom properties for theming
- Maintain accessibility standards

### JavaScript Guidelines
- Use jQuery for DOM manipulation
- Follow modular code structure
- Add proper error handling
- Use debouncing for performance

## Troubleshooting

### Common Issues

1. **Styles not loading**: Check if CSS file is properly enqueued
2. **JavaScript errors**: Ensure jQuery is loaded before the plugin scripts
3. **AJAX not working**: Verify nonce and AJAX URL configuration
4. **Mobile gestures not working**: Check touch event listeners

### Debug Mode
Add this to your `wp-config.php` for debugging:
```php
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

## License

GPL v2 or later

## Support

For support and customization requests, please contact the plugin developer.