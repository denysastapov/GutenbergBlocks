<?php

/**
 * Plugin Name: GTE Blocks
 * Description: A collection of custom Gutenberg blocks.
 * Version: 1.0
 * Author: GTE admin
 */

function gerchik_blocks_register_and_enqueue()
{
  wp_register_script(
    'gerchik-blocks-editor',
    plugins_url('build/index.js', __FILE__),
    array('wp-blocks', 'wp-element', 'wp-editor'),
    filemtime(plugin_dir_path(__FILE__) . 'build/index.js')
  );

  wp_register_style(
    'gerchik-blocks-style',
    plugins_url('build/style-index.css', __FILE__),
    array(),
    filemtime(plugin_dir_path(__FILE__) . 'build/style-index.css')
  );

  register_block_type('gerchik-blocks/gerchik-list', array(
    'editor_script' => 'gerchik-blocks-editor',
    'editor_style'  => 'gerchik-blocks-editor',
    'style'         => 'gerchik-blocks-style',
  ));

  register_block_type('gerchik-blocks/gerchik-gallery', array(
    'editor_script' => 'gerchik-blocks-editor',
    'editor_style'  => 'gerchik-blocks-editor',
    'style'         => 'gerchik-blocks-style',
  ));

  register_block_type('gerchik-blocks/gerchik-blockquote', array(
    'editor_script' => 'gerchik-blockquote-editor',
    'editor_style'  => 'gerchik-blockquote-editor',
    'style'         => 'gerchik-blockquote-style',
  ));

  register_block_type('gerchik-blocks/gerchik-slider', array(
    'editor_script' => 'gerchik-blocks-editor',
    'editor_style'  => 'gerchik-blocks-editor',
    'style'         => 'gerchik-blocks-style',
  ));

  register_block_type('gerchik-blocks/gerchick-simple-slider', array(
    'editor_script' => 'gerchik-blocks-editor',
    'editor_style'  => 'gerchik-blocks-editor',
    'style'         => 'gerchik-blocks-style',
  ));

  register_block_type('gerchik-blocks/gte-important', array(
    'editor_script' => 'gerchik-blocks-editor',
    'editor_style'  => 'gerchik-blocks-editor',
    'style'         => 'gerchik-blocks-style',
  ));

  register_block_type('gerchik-blocks/gte-preformatted', array(
    'editor_script' => 'gerchik-blocks-editor',
    'editor_style'  => 'gerchik-blocks-editor',
    'style'         => 'gerchik-blocks-style',
  ));
}

add_action('init', 'gerchik_blocks_register_and_enqueue');

add_filter('block_categories_all', 'gte_new_block_category');

function gte_new_block_category($block_categories)
{

  $block_categories[] = array(
    'slug' => 'gte',
    'title' => 'GTE Blocks'
  );

  return $block_categories;
}
function my_theme_enqueue_scripts()
{
  wp_enqueue_style('swiper-style', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css');
  wp_enqueue_script('swiper-script', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js', array(), null, true);
  wp_enqueue_script('gerchik-blocks-front-end', plugins_url('js/front-end.js', __FILE__), array('jquery', 'swiper-script'), '1.0', true);
}
add_action('wp_enqueue_scripts', 'my_theme_enqueue_scripts');
add_action('enqueue_block_editor_assets', 'my_theme_enqueue_scripts');
