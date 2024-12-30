import 'package:flutter/material.dart';

var appBar = Container(
  height: 60,
  color: Colors.white,
  child: Padding(
    padding: const EdgeInsets.only(left: 20, right: 20),
    child: Row(
      mainAxisAlignment:
          MainAxisAlignment.spaceBetween, // Aligns all children horizontally
      children: [
        Text("D A S H B O A R D"),
        IconButton(
          onPressed: () {},
          icon: Icon(Icons.settings),
        ),
      ],
    ),
  ),
);

// middle section
var middleSection = Padding(
  padding: const EdgeInsets.only(left: 20, right: 20),
  child: Container(
    height: 50,
    color: Colors.transparent,
    child: Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        Text("My Dashboard"),
        Row(
          children: [
            GestureDetector(
              onTap: () {},
              child: Container(
                padding: const EdgeInsets.only(
                    left: 10, right: 10, top: 5, bottom: 5),
                decoration: BoxDecoration(
                  color: Colors.grey[200],
                  borderRadius: BorderRadius.circular(30),
                ),
                child: Row(
                  children: [
                    Icon(Icons.add),
                    Text(
                      "Add New",
                      style: TextStyle(fontWeight: FontWeight.bold),
                    ),
                  ],
                ),
              ),
            ),
            SizedBox(width: 30),
            IconButton(
              onPressed: () {},
              icon: Icon(Icons.refresh),
            ),
          ],
        )
      ],
    ),
  ),
);

int currentIndex = 0;
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
