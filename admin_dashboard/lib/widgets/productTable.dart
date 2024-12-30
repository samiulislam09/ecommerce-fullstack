import 'package:flutter/material.dart';

class ProductTable extends StatelessWidget {
  const ProductTable({super.key});

  @override
  Widget build(BuildContext context) {
    return Expanded(
      child: DataTable(
        columns: getColumns(),
        rows: getRows(),
      ),
    );
  }

  List<DataColumn> getColumns() {
    return [
      DataColumn(label: Text("Product")),
      DataColumn(label: Text("Price")),
      DataColumn(label: Text("Stock")),
      DataColumn(label: Text("Actions")),
    ];
  }

  List<DataRow> getRows() {
    return [
      DataRow(
        cells: [
          DataCell(Text("Product 1")),
          DataCell(Text("\$10")),
          DataCell(Text("20")),
          DataCell(
            Row(
              children: [
                IconButton(
                  icon: Icon(Icons.edit),
                  onPressed: () {},
                ),
                IconButton(
                  icon: Icon(Icons.delete),
                  onPressed: () {},
                ),
              ],
            ),
          ),
        ],
      ),
      DataRow(
        cells: [
          DataCell(Text("Product 2")),
          DataCell(Text("\$20")),
          DataCell(Text("15")),
          DataCell(
            Row(
              children: [
                IconButton(
                  icon: Icon(Icons.edit),
                  onPressed: () {},
                ),
                IconButton(
                  icon: Icon(Icons.delete),
                  onPressed: () {},
                ),
              ],
            ),
          ),
        ],
      ),
    ];
  }
}
