<?php
/**
 * Plugin Name: Auto Detail Page
 * Plugin URI: https://example.com
 * Description: Modern auto detail page for car dealers with pricing, financing, and contact forms
 * Version: 1.0.0
 * Author: Your Name
 * License: GPL v2 or later
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

// Define plugin constants
define('ADP_PLUGIN_URL', plugin_dir_url(__FILE__));
define('ADP_PLUGIN_PATH', plugin_dir_path(__FILE__));

class AutoDetailPage {
    
    public function __construct() {
        add_action('wp_enqueue_scripts', array($this, 'enqueue_scripts'));
        add_shortcode('auto_detail_page', array($this, 'render_auto_detail_page'));
        add_action('wp_ajax_submit_contact_form', array($this, 'handle_contact_form'));
        add_action('wp_ajax_nopriv_submit_contact_form', array($this, 'handle_contact_form'));
    }
    
    public function enqueue_scripts() {
        // Enqueue CSS
        wp_enqueue_style('adp-styles', ADP_PLUGIN_URL . 'assets/css/styles.css', array(), '1.0.0');
        
        // Enqueue jQuery (WordPress includes it by default)
        wp_enqueue_script('jquery');
        
        // Enqueue custom JavaScript
        wp_enqueue_script('adp-scripts', ADP_PLUGIN_URL . 'assets/js/scripts.js', array('jquery'), '1.0.0', true);
        
        // Localize script for AJAX
        wp_localize_script('adp-scripts', 'adp_ajax', array(
            'ajax_url' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('adp_nonce')
        ));
    }
    
    public function render_auto_detail_page($atts) {
        $atts = shortcode_atts(array(
            'vehicle_id' => 1
        ), $atts);
        
        ob_start();
        include ADP_PLUGIN_PATH . 'templates/main-template.php';
        return ob_get_clean();
    }
    
    public function handle_contact_form() {
        check_ajax_referer('adp_nonce', 'nonce');
        
        $response = array('success' => false, 'message' => '');
        
        // Process form data
        $name = sanitize_text_field($_POST['name']);
        $email = sanitize_email($_POST['email']);
        $phone = sanitize_text_field($_POST['phone']);
        $message = sanitize_textarea_field($_POST['message']);
        
        // Send email or save to database
        // Implementation depends on your requirements
        
        $response['success'] = true;
        $response['message'] = 'Thank you for your inquiry!';
        
        wp_send_json($response);
    }
}

// Initialize the plugin
new AutoDetailPage();
?>