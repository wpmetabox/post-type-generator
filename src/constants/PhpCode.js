import { SupportSettings, TaxonomySettings } from './DefaultSettings';

const labelSettings = ( settings ) => {
	return (
	`'label'  => esc_html__( '${settings.name}', 'text-domain' ),
		'labels' => [
			'menu_name'          => esc_html__( '${settings.menu_name}', '${settings.text_domain}' ),
			'name_admin_bar'     => esc_html__( '${settings.name_admin_bar}', '${settings.text_domain}' ),
			'add_new'            => esc_html__( '${settings.add_new}', '${settings.text_domain}' ),
			'add_new_item'       => esc_html__( '${settings.add_new_item}', '${settings.text_domain}' ),
			'new_item'           => esc_html__( '${settings.new_item}', '${settings.text_domain}' ),
			'edit_item'          => esc_html__( '${settings.edit_item}', '${settings.text_domain}' ),
			'view_item'          => esc_html__( '${settings.view_item}', '${settings.text_domain}' ),
			'update_item'        => esc_html__( '${settings.update_item}', '${settings.text_domain}' ),
			'all_items'          => esc_html__( '${settings.all_items}', '${settings.text_domain}' ),
			'search_items'       => esc_html__( '${settings.search_items}', '${settings.text_domain}' ),
			'parent_item_colon'  => esc_html__( '${settings.parent_item_colon}', '${settings.text_domain}' ),
			'not_found'          => esc_html__( '${settings.not_found}', '${settings.text_domain}' ),
			'not_found_in_trash' => esc_html__( '${settings.not_found_in_trash}', '${settings.text_domain}' ),
			'name'               => esc_html__( '${settings.name}', '${settings.text_domain}' ),
			'singular_name'      => esc_html__( '${settings.singular_name}', '${settings.text_domain}' ),
		],`
	);
}

const supportSettings = ( settings ) => {
	let temp = '';

	for ( let key in SupportSettings ) {
		temp += settings[key] === true ? `\n\t\t\t'${key}',` : '';
	}

	return '' === temp ? '' : `'supports' => [${temp}\n\t\t],`;
}

const taxonomySettings = ( settings ) => {
	let temp = '';

	for ( let key in TaxonomySettings ) {
		temp += settings[key] === true ? `\n\t\t\t'${key}',` : '';
	}

	return '' === temp ? '' : `\n\t\t'taxonomies' => [${temp}\n\t\t],`;
}

const PhpCode = ( settings ) => {
	return (
`function ${settings.function_name}() {
	$args = [
		${labelSettings( settings )}
		'public'              => ${settings.public},
		'exclude_from_search' => ${settings.exclude_from_search},
		'publicly_queryable'  => ${settings.publicly_queryable},
		'show_ui'             => ${settings.show_ui},
		'show_in_nav_menus'   => ${settings.show_in_nav_menus},
		'show_in_admin_bar'   => ${settings.show_in_admin_bar},
		'show_in_rest'        => ${settings.show_in_rest},
		'menu_position'       => 2,
		'capability_type'     => 'post',
		'hierarchical'        => ${settings.hierarchical},
		'has_archive'         => ${settings.has_archive},
		'query_var'           => ${settings.query_var},
		'can_export'          => ${settings.can_export},
		'rewrite_no_front'    => ${settings.rewrite_no_front},
		'show_in_menu'        => 'index.php',
		${supportSettings( settings )}${taxonomySettings( settings )}
		'rewrite' => ${settings.rewrite},
	];

	register_post_type( '${settings.args_post_type}', $args );
}

add_action( 'init', '${settings.function_name}' );`
	);
}

export default PhpCode;