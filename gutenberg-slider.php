<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://visual-legion.com
 * @since             0.0.1
 * @package           Gutenberg_Slider
 *
 * @wordpress-plugin
 * Plugin Name:       Gutenberg Slider 
 * Plugin URI:        https://github.com/Visual-Legion/gutenberg-slider.git
 * Description:       Easy content slider like images and text for gutenberg based on react slick slider. 
 * Version:           0.0.1
 * Author:            Ulysse Coates
 * Author URI:        https://visual-legion.com
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       gutenberg-slider
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Currently plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
define( 'GUTENBERG_SLIDER_VERSION', '0.0.1' );

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-gutenberg-slider-activator.php
 */
function activate_gutenberg_slider() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-gutenberg-slider-activator.php';
	Gutenberg_Slider_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-gutenberg-slider-deactivator.php
 */
function deactivate_gutenberg_slider() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-gutenberg-slider-deactivator.php';
	Gutenberg_Slider_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_gutenberg_slider' );
register_deactivation_hook( __FILE__, 'deactivate_gutenberg_slider' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-gutenberg-slider.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */

// /**
// * Register Custom Slider
// */
// function vl_gs_custom_post_type() {

//     $labels = array(
//       'name'                  => _x( 'Sliders', 'Slider General Name', 'vl_gs_text_domain' ),
//       'singular_name'         => _x( 'Slider', 'Slider Singular Name', 'vl_gs_text_domain' ),
//       'menu_name'             => __( 'Sliders', 'vl_gs_text_domain' ),
//       'name_admin_bar'        => __( 'Slider', 'vl_gs_text_domain' ),
//       'archives'              => __( 'Slider Archives', 'vl_gs_text_domain' ),
//       'attributes'            => __( 'Slider Attributes', 'vl_gs_text_domain' ),
//       'parent_item_colon'     => __( 'Parent Slider:', 'vl_gs_text_domain' ),
//       'all_items'             => __( 'All Sliders', 'vl_gs_text_domain' ),
//       'add_new_item'          => __( 'Add New Slider', 'vl_gs_text_domain' ),
//       'add_new'               => __( 'Add New', 'vl_gs_text_domain' ),
//       'new_item'              => __( 'New Slider', 'vl_gs_text_domain' ),
//       'edit_item'             => __( 'Edit Slider', 'vl_gs_text_domain' ),
//       'update_item'           => __( 'Update Slider', 'vl_gs_text_domain' ),
//       'view_item'             => __( 'View Slider', 'vl_gs_text_domain' ),
//       'view_items'            => __( 'View Sliders', 'vl_gs_text_domain' ),
//       'search_items'          => __( 'Search Slider', 'vl_gs_text_domain' ),
//       'not_found'             => __( 'Not found', 'vl_gs_text_domain' ),
//       'not_found_in_trash'    => __( 'Not found in Trash', 'vl_gs_text_domain' ),
//       'featured_image'        => __( 'Featured Image', 'vl_gs_text_domain' ),
//       'set_featured_image'    => __( 'Set featured image', 'vl_gs_text_domain' ),
//       'remove_featured_image' => __( 'Remove featured image', 'vl_gs_text_domain' ),
//       'use_featured_image'    => __( 'Use as featured image', 'vl_gs_text_domain' ),
//       'insert_into_item'      => __( 'Insert into item', 'vl_gs_text_domain' ),
//       'uploaded_to_this_item' => __( 'Uploaded to this item', 'vl_gs_text_domain' ),
//       'items_list'            => __( 'Sliders list', 'vl_gs_text_domain' ),
//       'items_list_navigation' => __( 'Sliders list navigation', 'vl_gs_text_domain' ),
//       'filter_items_list'     => __( 'Filter items list', 'vl_gs_text_domain' ),
//     );

//     $args = array(
//       'label'                 => __( 'Slider', 'vl_gs_text_domain' ),
//       'description'           => __( 'Slider Description', 'vl_gs_text_domain' ),
//       'labels'                => $labels,
//       'supports'              => array( 'editor', 'title', 'revisions', 'page-attributes', 'custom-fields' ),
//       'taxonomies'            => array( 'category', 'post_tag' ),
//       'hierarchical'          => true,
//       'public'                => true,
//       'show_ui'               => true,
//       'show_in_menu'          => true,
//       'show_in_rest'          => true,
//       'template'              => array(array('vl-gs/editor')),
//       // 'template_lock'        => 'all',
//       'menu_position'         => 5,
//       'menu_icon'             => 'dashicons-admin-plugins',
//       'show_in_admin_bar'     => true,
//       'show_in_nav_menus'     => true,
//       'can_export'            => true,
//       'has_archive'           => true,
//       'exclude_from_search'   => false,
//       'publicly_queryable'    => true,
//       'capability_type'       => 'page',
//     );
//     register_post_type( 'slider', $args );

//   }
// add_action( 'init', 'vl_gs_custom_post_type' );

// add_filter('single_template', 'vl_gs_my_custom_template');
// function vl_gs_my_custom_template($single) {

//     global $post;

//     /* Checks for single template by post type */
//     if ( $post->post_type == 'slider' ) {
//         if ( file_exists( __DIR__ . '/public/partials/single-slider.php' ) ) {
//             return __DIR__ . '/public/partials/single-slider.php';
//         }
//     }

//     return $single;

// }

// add_filter( 'archive_template', 'vl_gs_get_custom_post_type_template' ) ;
// function vl_gs_get_custom_post_type_template($archive) {

//     global $post;

//     /* Checks for archive template by post type */
//     if ( $post->post_type == 'slider' ) {
//         if ( file_exists( __DIR__ . '/public/partials/archive-slider.php' ) ) {
//             return __DIR__ . '/public/partials/archive-slider.php';
//         }
//     }

//     return $archive;

// }

// function vl_gs_meta_gutenberg_editor_block_init() {
//     register_meta( 'post', 'vl_gs_editor__title', array(
//         'show_in_rest' => true,
//         'single' => true,
//         'type' => 'string'
//     ) );
// }
// add_action( 'init', 'vl_gs_meta_gutenberg_editor_block_init' );


// /**
// * Pagination
// */

// function vl_gs_pagination_bar( $custom_query ) {

//     $total_pages = $custom_query->max_num_pages;
//     $big = 999999999; // need an unlikely integer

//     if ($total_pages > 1){
//         $current_page = max(1, get_query_var('paged'));

//         echo paginate_links(array(
//             'base' => str_replace( $big, '%#%', esc_url( get_pagenum_link( $big ) ) ),
//             'format' => '?paged=%#%',
//             'current' => $current_page,
//             'total' => $total_pages,
//         ));
//     }
// }

// /**
// * Rest API
// */
// require_once 'vl_gs_rest_endpoints.php'; 


// /**
// * Settings Page
// */

// require_once 'settings.php';

/**
/* Main block 
*/

// To create if php render is necessary
//require_once 'php-renders/gutenberg-slider-render.php';

function vl_gs_my_register_main() {

  // Register our block script with WordPress
  wp_register_script(
    'vl-gs-js',
    plugins_url('/blocks/dist/blocks.build.js', __FILE__),
    array('wp-blocks', 'wp-element')
  );

  // Adding settings value from db to block js
  if (isset(get_option('vl_gs_options')['vl_gs_api_key'])) {
    wp_localize_script( 'vl-gs-js', 'api_key', get_option('vl_gs_options')['vl_gs_api_key'] );
  } else {
    wp_localize_script( 'vl-gs-js', 'api_key', null );
  }

  // Register our block's base CSS  
  wp_register_style(
    'vl-gs-style',
    plugins_url( '/blocks/dist/blocks.style.build.css', __FILE__ ),
    array( 'wp-blocks' )
  );
  
  // Register our block's editor-specific CSS
  wp_register_style(
    'vl-gs-edit-style',
    plugins_url('/blocks/dist/blocks.editor.build.css', __FILE__),
    array( 'wp-edit-blocks' )
  );  
  
  // Enqueue the script in the editor
  register_block_type('vl-gpg/main', array( 
  	// 'render_callback' => 'vl_blocks_main_callback',
    'editor_script' => 'vl-gs-js',
    'editor_style' => 'vl-gs-edit-style',
    'style' => 'vl-gs-style'
  ));
}

add_action('init', 'vl_gs_my_register_main');


// /**
// /* CPT Editor block 
// */

// // To create if php render is necessary
// //require_once 'php-renders/gpb-editor-render.php';

// function vl_gs_my_register_editor() {

//   // Register our block script with WordPress
//   wp_register_script(
//     'vl-gs-editor-js',
//     plugins_url('/blocks/dist/blocks.build.js', __FILE__),
//     array('wp-blocks', 'wp-element')
//   );

//   // Adding settings value from db to block js
//   // if (isset(get_option('vl_gs_options')['vl_gs_api_key'])) {
//   //   wp_localize_script( 'vl-gs-editor-js', 'api_key', get_option('vl_gs_options')['vl_gs_api_key'] );
//   // } else {
//   //   wp_localize_script( 'vl-gs-editor-js', 'api_key', null );
//   // }

//   // Register our block's base CSS  
//   wp_register_style(
//     'vl-gs-editor-style',
//     plugins_url( '/blocks/dist/blocks.style.build.css', __FILE__ ),
//     array( 'wp-blocks' )
//   );
  
//   // Register our block's editor-specific CSS
//   wp_register_style(
//     'vl-gs-editor-edit-style',
//     plugins_url('/blocks/dist/blocks.editor.build.css', __FILE__),
//     array( 'wp-edit-blocks' )
//   );  
  
//   // Enqueue the script in the editor
//   register_block_type('vl-gpg/editor', array( 
//     // 'render_callback' => 'vl_blocks_editor_callback',
//     'editor_script' => 'vl-gs-editor-js',
//     'editor_style' => 'vl-gs-editor-edit-style',
//     'style' => 'vl-gs-editor-style'
//   ));
// }

// add_action('init', 'vl_gs_my_register_editor');

// /**
// /* CPT Page block 
// */

// // To create if php render is necessary
// //require_once 'php-renders/gpb-editor-render.php';

// function vl_gs_my_register_page() {

//   // Register our block script with WordPress
//   wp_register_script(
//     'vl-gs-page-js',
//     plugins_url('/blocks/dist/blocks.build.js', __FILE__),
//     array('wp-blocks', 'wp-element')
//   );

//   // Adding settings value from db to block js
//   // if (isset(get_option('vl_gs_options')['vl_gs_api_key'])) {
//   //   wp_localize_script( 'vl-gs-page-js', 'api_key', get_option('vl_gs_options')['vl_gs_api_key'] );
//   // } else {
//   //   wp_localize_script( 'vl-gs-page-js', 'api_key', null );
//   // }

//   // Register our block's base CSS  
//   wp_register_style(
//     'vl-gs-page-style',
//     plugins_url( '/blocks/dist/blocks.style.build.css', __FILE__ ),
//     array( 'wp-blocks' )
//   );
  
//   // Register our block's page-specific CSS
//   wp_register_style(
//     'vl-gs-page-edit-style',
//     plugins_url('/blocks/dist/blocks.page.build.css', __FILE__),
//     array( 'wp-edit-blocks' )
//   );  
  
//   // Enqueue the script in the page
//   register_block_type('vl-gpg/page', array( 
//     // 'render_callback' => 'vl_blocks_page_callback',
//     'page_script' => 'vl-gs-page-js',
//     'page_style' => 'vl-gs-page-edit-style',
//     'style' => 'vl-gs-page-style'
//   ));
// }

// add_action('init', 'vl_gs_my_register_page');

function vl_gs_adding_library_scripts() {
  wp_register_script('slick_js', plugins_url('lib/slick/slick.min.js', __FILE__), array('jquery'),'1.1', true);
  wp_enqueue_script('slick_js');
}
add_action( 'wp_enqueue_scripts', 'vl_gs_adding_library_scripts' ); 
add_action( 'admin_enqueue_scripts', 'vl_gs_adding_library_scripts' );


function vl_gs_adding_library_styles() {
  wp_register_style('slick_css', plugins_url('lib/slick/slick.css', __FILE__));
  wp_enqueue_style('slick_css');
  wp_register_style('slick_theme', plugins_url('lib/slick/slick-theme.css', __FILE__));
  wp_enqueue_style('slick_theme');
}
add_action( 'wp_enqueue_scripts', 'vl_gs_adding_library_styles' );  
add_action( 'admin_enqueue_scripts', 'vl_gs_adding_library_styles' );



function vl_gs_adding_shared_scripts() {
  wp_register_script('vl_gs_shared_scripts', plugins_url('shared/shared.js', __FILE__), array('jquery'),'1.1', true);
  wp_enqueue_script('vl_gs_shared_scripts');
}
  
add_action( 'wp_enqueue_scripts', 'vl_gs_adding_shared_scripts' ); 
add_action( 'admin_enqueue_scripts', 'vl_gs_adding_shared_scripts' );

function run_gutenberg_slider() {

	$plugin = new Gutenberg_Slider();
	$plugin->run();

}

run_gutenberg_slider();
