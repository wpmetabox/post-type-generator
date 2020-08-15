export const BasicDatas = [
	{ type: 'text', name: 'name', label: 'Plural name', required: true, placeholder: 'General name for the post type' },
	{ type: 'text', name: 'singular_name', label: 'Singular name', required: true, placeholder: 'Name for one object of the post type' },
	{ type: 'text', name: 'args_post_type', label: 'Slug', required: true },
	{ type: 'text', name: 'function_name', label: 'Function name', placeholder: 'Your function name' },
	{ type: 'text', name: 'text_domain', label: 'Text domain', placeholder: 'Your text domain' },
];

export const LabelDatas = [
	{ type: 'text', name: 'menu_name', label: 'Menu name', placeholder: 'The menu name text' },
	{ type: 'text', name: 'name_admin_bar', label: 'Name in admin bar', placeholder: 'Name given for ther Add New dropdown' },
	{ type: 'text', name: 'all_items', label: 'All items', placeholder: 'The all items text used in the menu' },
	{ type: 'text', name: 'add_new', label: 'Add new', placeholder: 'The add new text' },
	{ type: 'text', name: 'add_new_item', label: 'Add new item', placeholder: 'The add new item text' },
	{ type: 'text', name: 'edit_item', label: 'Edit item', placeholder: 'The edit item text' },
	{ type: 'text', name: 'new_item', label: 'New item', placeholder: 'The new item text' },
	{ type: 'text', name: 'view_item', label: 'View item', placeholder: 'The view item text' },
	{ type: 'text', name: 'search_items', label: 'Search items', placeholder: 'The search items text text' },
	{ type: 'text', name: 'not_found', label: 'Not found', placeholder: 'The not found text' },
	{ type: 'text', name: 'not_found_in_trash', label: 'Not found in trash', placeholder: 'The not found in trash text' },
	{ type: 'text', name: 'parent_item_colon', label: 'Parent items', placeholder: 'The parent text' },
];

export const SupportDatas = [
	{ type: 'checkbox', name: 'title', label: 'Title', checked: true },
	{ type: 'checkbox', name: 'editor', label: 'Editor', checked: true },
	{ type: 'checkbox', name: 'author', label: 'Author', checked: false },
	{ type: 'checkbox', name: 'thumbnail', label: 'Thumbnail', checked: true },
	{ type: 'checkbox', name: 'trackbacks', label: 'Trackbacks', checked: false },
	{ type: 'checkbox', name: 'custom-fields', label: 'Custom fields', checked: false },
	{ type: 'checkbox', name: 'comments', label: 'Comments', checked: false },
	{ type: 'checkbox', name: 'revisions', label: 'Revisions', checked: false },
	{ type: 'checkbox', name: 'page-attributes', label: 'Page attributes', checked: false },
];

export const TaxonomyDatas = [
	{ type: 'checkbox', name: 'category', label: 'Category', checked: false },
	{ type: 'checkbox', name: 'tag', label: 'Tag', checked: false },
];

export const AdvancedDatas = [
	{ type: 'textarea', name: 'description', label: 'Description', placeholder: 'A short descriptive summary of what the post type is' },
	{ type: 'checkbox', name: 'public', label: 'Public?', description: 'Controls how the type is visible to authors and readers.', checked: true },
	{ type: 'checkbox', name: 'exclude_from_search', label: 'Exclude from search?', description: 'Whether to exclude posts with this post type from frontend search results.', checked: false },
	{ type: 'checkbox', name: 'publicly_queryable', label: 'Publicly queryable?', description: 'Whether queries can be performed on the frontend.', checked: true },
	{ type: 'checkbox', name: 'show_ui', label: ' Show UI? ', description: 'Whether queries can be performed on the frontend.', checked: true },
	{ type: 'checkbox', name: 'show_in_nav_menus', label: 'Show in nav menus?', description: 'Whether queries can be performed on the frontend.', checked: true },
	// select show in menu
	{ type: 'checkbox', name: 'show_in_admin_bar', label: 'Show in admin bar?', description: 'Whether to make this post type available in the WordPress admin bar.', checked: true },
	{ type: 'checkbox', name: 'show_in_rest', label: 'Show in admin bar?', description: 'Whether to add the post type in the REST API.', checked: true },
	// text slug api
	// select menu position
	// radio icon
	{ type: 'radio', name: 'capability_type', label: ' Capability type ', description: 'The post type to use for checking read, edit, and delete capabilities.' },
	{ type: 'checkbox', name: 'hierarchical', label: 'Hierarchical?', description: 'Whether the post type is hierarchical.', checked: false },
	{ type: 'checkbox', name: 'has_archive', label: 'Has archive?', description: 'Enables post type archives.', checked: true },
	// text custom archive slug
	{ type: 'checkbox', name: 'query_var', label: 'Query var', description: 'Enables post type archives.', checked: true },
	{ type: 'checkbox', name: 'can_export', label: 'Can export?', description: 'Enables post type archives.', checked: true },
	// { type: 'text', name: 'parent_item_colon', label: 'Custom rewrite slug', description: 'Leave empty to use the post type slug.' },
	// { type: 'checkbox', name: 'can_export', label: 'No prepended permalink structure?', description: 'Do not prepend the permalink structure with the front base.', checked: false },
];