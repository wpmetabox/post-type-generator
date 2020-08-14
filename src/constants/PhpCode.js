class PhpCode {
	constructor( name ) {
		this.name = name;
	}

	getCode() {
		return `function ${this.function_name}() {
	$args = [
		'label'  => esc_html__( '${this.name}', 'text-domain' ),
		'labels' => [
			'menu_name'          => esc_html__( '${this.menu_name}', '${this.text_domain}' ),
			'name_admin_bar'     => esc_html__( '${this.name_admin_bar}', '${this.text_domain}' ),
			'add_new'            => esc_html__( '${this.add_new}', '${this.text_domain}' ),
			'add_new_item'       => esc_html__( '${this.add_new_item}', '${this.text_domain}' ),
			'new_item'           => esc_html__( '${this.new_item}', '${this.text_domain}' ),
			'edit_item'          => esc_html__( '${this.edit_item}', '${this.text_domain}' ),
			'view_item'          => esc_html__( '${this.view_item}', '${this.text_domain}' ),
			'update_item'        => esc_html__( '${this.update_item}', '${this.text_domain}' ),
			'all_items'          => esc_html__( '${this.all_items}', '${this.text_domain}' ),
			'search_items'       => esc_html__( '${this.search_items}', '${this.text_domain}' ),
			'parent_item_colon'  => esc_html__( '${this.parent_item_colon}', '${this.text_domain}' ),
			'not_found'          => esc_html__( '${this.not_found}', '${this.text_domain}' ),
			'not_found_in_trash' => esc_html__( '${this.not_found_in_trash}', '${this.text_domain}' ),
			'name'               => esc_html__( '${this.name}', '${this.text_domain}' ),
			'singular_name'      => esc_html__( '${this.singular_name}', '${this.text_domain}' ),
		],
		'public'              => ${this.public},
		'exclude_from_search' => ${this.exclude_from_search},
		'publicly_queryable'  => ${this.publicly_queryable},
		'show_ui'             => ${this.show_ui},
		'show_in_nav_menus'   => ${this.show_in_nav_menus},
		'show_in_admin_bar'   => ${this.show_in_admin_bar},
		'show_in_rest'        => ${this.show_in_rest},
		'menu_position'       => 2,
		'capability_type'     => 'post',
		'hierarchical'        => ${this.hierarchical},
		'has_archive'         => ${this.has_archive},
		'query_var'           => ${this.query_var},
		'can_export'          => ${this.can_export},
		'rewrite_no_front'    => ${this.rewrite_no_front},
		'show_in_menu'        => 'index.php',
		'supports'            => [
			'title',
			'editor',
			'author',
			'thumbnail',
			'excerpt',
			'trackbacks',
			'custom-fields',
			'comments',
			'revisions',
			'page-attributes',
		],
		'taxonomies' => [
			'category',
			'post_tag',
		],
		'rewrite' => ${this.rewrite},
	];

	register_post_type( '${this.args_post_type}', $args );
}

add_action( 'init', '${this.function_name}' );`
	}
}

export default PhpCode;