import 'package:flutter/material.dart';

var appbar = AppBar(
  backgroundColor: Colors.grey[300],
);

var drawer = Drawer(
  child: ListView(
    padding: EdgeInsets.zero,
    children: <Widget>[
      const DrawerHeader(
        child: Center(
          child: Icon(Icons.abc),
        ),
      ),
      HoverableListTile(
        leading: const Icon(Icons.dashboard),
        title: 'D A S H B O A R D',
        onTap: null,
      ),
      HoverableListTile(
        leading: Icon(Icons.category),
        title: 'C A T E G O R I E S',
        onTap: null,
      ),
      HoverableListTile(
        leading: Icon(Icons.subtitles),
        title: 'S U B C A T E G O R I E S',
        onTap: null,
      ),
      HoverableListTile(
        leading: Icon(Icons.branding_watermark_sharp),
        title: 'B R A N D S',
        onTap: null,
      ),
      HoverableListTile(
        leading: Icon(Icons.difference),
        title: 'V A R I A N T S',
        onTap: null,
      ),
      HoverableListTile(
        leading: Icon(Icons.shopping_bag),
        title: 'O R D E R S',
        onTap: null,
      ),
      HoverableListTile(
        leading: Icon(Icons.discount),
        title: 'C O U P O N S',
        onTap: null,
      ),
      HoverableListTile(
        leading: Icon(Icons.post_add_rounded),
        title: 'P O S T E R S',
        onTap: null,
      ),
      HoverableListTile(
        leading: Icon(Icons.notification_add),
        title: 'N O T I F I C A T I O N S',
        onTap: null,
      ),
    ],
  ),
);

class HoverableListTile extends StatefulWidget {
  final Icon leading;
  final String title;
  final bool isActive;
  final VoidCallback? onTap;

  const HoverableListTile({
    required this.leading,
    required this.title,
    this.isActive = false,
    this.onTap,
    Key? key,
  }) : super(key: key);

  @override
  _HoverableListTileState createState() => _HoverableListTileState();
}

class _HoverableListTileState extends State<HoverableListTile> {
  bool isHovered = false;

  @override
  Widget build(BuildContext context) {
    Color backgroundColor = widget.isActive
        ? Colors.blue.shade100
        : isHovered
            ? Colors.grey.shade300
            : Colors.transparent;

    return MouseRegion(
      cursor: SystemMouseCursors.click,
      onEnter: (_) => setState(() => isHovered = true),
      onExit: (_) => setState(() => isHovered = false),
      child: Material(
        color: backgroundColor,
        child: ListTile(
          leading: widget.leading,
          title: Text(widget.title),
          onTap: widget.onTap,
        ),
      ),
    );
  }
}
