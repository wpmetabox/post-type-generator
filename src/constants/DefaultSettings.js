const BasicSettings = {
	'name'          : '',
	'singular_name' : '',
	'args_post_type': '',
	'function_name' : '',
	'text_domain'   : '',
}

const LabelSettings = {
	'menu_name'         : '',
	'name_admin_bar'    : '',
	'add_new'           : '',
	'add_new_item'      : '',
	'new_item'          : '',
	'edit_item'         : '',
	'view_item'         : '',
	'update_item'       : '',
	'all_items'         : '',
	'search_items'      : '',
	'parent_item_colon' : '',
	'not_found'         : '',
	'not_found_in_trash': '',
}

export const SupportSettings = {
	'title' : true,
	'editor': true,
	'author': false,
	'thumbnail': true,
	'excerpt': false,
	'trackbacks': false,
	'custom-fields': false,
	'comments': false,
	'revisions': false,
	'page-attributes': false,
}

export const TaxonomySettings = {
	'category': false,
	'tag'     : false,
}

export const AdvancedSettings = {

}

const DefaultSettings = {
	...BasicSettings,
	...LabelSettings,
	...SupportSettings,
	...TaxonomySettings,
	...AdvancedSettings
};

export default DefaultSettings;