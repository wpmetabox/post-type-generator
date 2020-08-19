import { Icons } from './Icons';

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
	{ type: 'checkbox', name: 'title', description: 'Title', checked: true },
	{ type: 'checkbox', name: 'editor', description: 'Editor', checked: true },
	{ type: 'checkbox', name: 'author', description: 'Author', checked: false },
	{ type: 'checkbox', name: 'thumbnail', description: 'Thumbnail', checked: true },
	{ type: 'checkbox', name: 'trackbacks', description: 'Trackbacks', checked: false },
	{ type: 'checkbox', name: 'custom-fields', description: 'Custom fields', checked: false },
	{ type: 'checkbox', name: 'comments', description: 'Comments', checked: false },
	{ type: 'checkbox', name: 'revisions', description: 'Revisions', checked: false },
	{ type: 'checkbox', name: 'page-attributes', description: 'Page attributes', checked: false },
];

export const TaxonomyDatas = [
	{ type: 'checkbox', name: 'category', description: 'Category', checked: false },
	{ type: 'checkbox', name: 'tag', description: 'Tag', checked: false },
];

const TaxDatas = [
	{ value: 'post', label: 'Post' },
	{ value: 'page', label: 'Page' },
	{ value: 'custom', label: 'Custom' }
];

const ShowInMenuData = [
	{ name: 'show_in_menu', value: 0, label: 'Select an item' },
	{ name: 'show_in_menu', value: true, label: 'Show as top-level menu' },
	{ name: 'show_in_menu', value: false, label: 'Do not show in the admin menu' },
	{ name: 'show_in_menu', value: 'index.php', label: 'Show as sub-menu of Dashboard' },
	{ name: 'show_in_menu', value: 'upload.php', label: 'Show as sub-menu of Media' },
	{ name: 'show_in_menu', value: 'edit-tags.php?taxonomy=link_category', label: 'Show as sub-menu of Links' },
	{ name: 'show_in_menu', value: 'edit-comments.php', label: 'Show as sub-menu of Comments ' },
	{ name: 'show_in_menu', value: 'edit.php', label: 'Show as sub-menu of Posts' },
	{ name: 'show_in_menu', value: 'edit.php?post_value=page', label: 'Show as sub-menu of Pages' },
	{ name: 'show_in_menu', value: 'themes.php', label: 'Show as sub-menu of Appearance' },
	{ name: 'show_in_menu', value: 'plugins.php', label: 'Show as sub-menu of Plugins' },
	{ name: 'show_in_menu', value: 'users.php', label: 'Show as sub-menu of Users' },
	{ name: 'show_in_menu', value: 'tools.php', label: 'Show as sub-menu of Tools' },
	{ name: 'show_in_menu', value: 'options-general.php', label: 'Show as sub-menu of Settings' }
];

const MenuPosition = [
	{ name: 'menu_position', value: 2, label: 'Dashboard' },
	{ name: 'menu_position', value: 5, label: 'Posts' },
	{ name: 'menu_position', value: 10, label: 'Media' },
	{ name: 'menu_position', value: 15, label: 'Links' },
	{ name: 'menu_position', value: 20, label: 'Pages' },
	{ name: 'menu_position', value: 25, label: 'Comments' },
	{ name: 'menu_position', value: 60, label: 'Appearance' },
	{ name: 'menu_position', value: 65, label: 'Plugins' },
	{ name: 'menu_position', value: 70, label: 'Users' },
	{ name: 'menu_position', value: 75, label: 'Tools' },
	{ name: 'menu_position', value: 80, label: 'Settings' },
	{ name: 'menu_position', value: 100, label: 'Metabox' },
];

export const AdvancedDatas = [
	{ type: 'textarea', name: 'description', label: 'Description', placeholder: 'A short descriptive summary of what the post type is' },
	{ type: 'checkbox', name: 'public', label: 'Public?', description: 'Controls how the type is visible to authors and readers.', checked: true },
	{ type: 'checkbox', name: 'exclude_from_search', label: 'Exclude from search?', description: 'Whether to exclude posts with this post type from frontend search results.', checked: false },
	{ type: 'checkbox', name: 'publicly_queryable', label: 'Publicly queryable?', description: 'Whether queries can be performed on the frontend.', checked: true },
	{ type: 'checkbox', name: 'show_ui', label: ' Show UI? ', description: 'Whether queries can be performed on the frontend.', checked: true },
	{ type: 'checkbox', name: 'show_in_nav_menus', label: 'Show in nav menus?', description: 'Whether queries can be performed on the frontend.', checked: true },
	{ type: 'select', name: 'show_in_menu', label: 'Show in menu?', description: 'Where to show the post type in the admin menu. show_ui must be true.', values: ShowInMenuData, defaultValue: 0 },
	{ type: 'checkbox', name: 'show_in_admin_bar', label: 'Show in admin bar?', description: 'Whether to make this post type available in the WordPress admin bar.', checked: true },
	{ type: 'checkbox', name: 'show_in_rest', label: 'Show in admin bar?', description: 'Whether to add the post type in the REST API.', checked: true },
	{ type: 'text', name: 'rest_base', label: 'REST API base slug', description: 'Leave empty to use the post type slug.', placeholder: 'Slug to use in REST API URL' },
	{ type: 'select', name: 'menu_position', label: 'Menu position after', values: MenuPosition },
	{ type: 'radio', name: 'menu_icon', label: 'Menu icon', values: Icons },
	{ type: 'radio', name: 'capability_type', label: 'Capability type', description: 'The post type to use for checking read, edit, and delete capabilities.', values: TaxDatas, defaultValue: 'post' },
	{ type: 'checkbox', name: 'hierarchical', label: 'Hierarchical?', description: 'Whether the post type is hierarchical.', checked: false },
	{ type: 'checkbox', name: 'has_archive', label: 'Has archive?', description: 'Enables post type archives.', checked: true },
	{ type: 'text', name: 'archive_slug', label: 'Custom archive slug', description: 'Default is the post type slug.' },
	{ type: 'checkbox', name: 'query_var', label: 'Query var', description: 'Enables request the post via URL: example.com/?post_type=slug', checked: true },
	{ type: 'checkbox', name: 'can_export', label: 'Can export?', description: 'Can this post type be exported?', checked: true },
	{ type: 'text', name: 'rewrite_slug', label: 'Custom rewrite slug', description: 'Leave empty to use the post type slug.' },
	{ type: 'checkbox', name: 'rewrite_no_front', label: 'No prepended permalink structure?', description: 'Do not prepend the permalink structure with the front base.', checked: false },
];