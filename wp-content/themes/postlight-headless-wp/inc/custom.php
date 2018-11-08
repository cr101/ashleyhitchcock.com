<?php add_theme_support( 'post-thumbnails' ); 

function ag_filter_post_json($response, $post, $context) {
  $tags = wp_get_post_tags($post->ID);
  $response->data['tag_names'] = [];

  foreach ($tags as $tag) {
      $response->data['tag_names'][] = $tag->name;
  }

  return $response;
}

add_filter( 'rest_prepare_post', 'ag_filter_post_json', 10, 3 );


// w

//add_action( 'rest_api_init', 'my_register_route' );

function my_register_route() {
    register_rest_route( 'contact/v1', 'send', array(
                    'methods' => 'POST',
                    'callback' => 'send_email',
                    'args' => array(
                      'email' => array_merge( $form_email_arg, array( 'required' => true ) ),
                      'subject' => array_merge( $form_subject_arg, array( 'required' => true ) ),
                      'message' => array_merge( $form_message_arg, array( 'required' => true ) )
                    )
                )
            );
}
function send_email($request) {
      wp_mail($request['email'], $request['subject'], $request['message']);
    return rest_ensure_response( 'Hello World! This is my first REST API' );
}