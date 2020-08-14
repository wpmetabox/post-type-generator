export const BasicSettings = [
	{ type: 'text', name: 'name', label: 'Plural name', required: true, placeholder: 'General name for the post type' },
	{ type: 'text', name: 'singular_name', label: 'Singular name', required: true, placeholder: 'Name for one object of the post type' },
	{ type: 'text', name: 'args_post_type', label: 'Slug', required: true },
	{ type: 'text', name: 'function_name', label: 'Function name', placeholder: 'Your function name' },
	{ type: 'text', name: 'text_domain', label: 'Text domain', placeholder: 'Your text domain' },
];

export const LabelSettings = [
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