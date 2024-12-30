import 'package:admin_dashboard/widgets/constants.dart';
import 'package:admin_dashboard/widgets/productCard.dart';
import 'package:admin_dashboard/widgets/productTable.dart';
import 'package:flutter/material.dart';

class Home extends StatefulWidget {
  const Home({super.key});

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Row(
        children: [
          drawer,
          Expanded(
            child: Container(
              padding: const EdgeInsets.all(16),
              child: Column(
                children: [
                  appBar,
                  middleSection,
                  Row(
                    children: [
                      Expanded(
                          flex: 3,
                          child: Column(
                            children: [
                              Row(
                                mainAxisAlignment:
                                    MainAxisAlignment.spaceBetween,
                                children: [
                                  Expanded(
                                    child: Padding(
                                      padding: const EdgeInsets.all(8.0),
                                      child: Container(
                                        height: 200,
                                        color: Colors.grey[200],
                                        child: ProductCard(
                                            title: "title",
                                            logoColor: Colors.blue),
                                      ),
                                    ),
                                  ),
                                  Expanded(
                                    child: Padding(
                                      padding: const EdgeInsets.all(8.0),
                                      child: Container(
                                        height: 200,
                                        color: Colors.grey[200],
                                        child: ProductCard(
                                            title: "title",
                                            logoColor: Colors.yellow),
                                      ),
                                    ),
                                  ),
                                  Expanded(
                                    child: Padding(
                                      padding: const EdgeInsets.all(8.0),
                                      child: Container(
                                        height: 200,
                                        color: Colors.grey[200],
                                        child: ProductCard(
                                            title: "title",
                                            logoColor: Colors.green),
                                      ),
                                    ),
                                  ),
                                  Expanded(
                                    child: Padding(
                                      padding: const EdgeInsets.all(8.0),
                                      child: Container(
                                        height: 200,
                                        color: Colors.grey[200],
                                        child: ProductCard(
                                            title: "title",
                                            logoColor: Colors.green),
                                      ),
                                    ),
                                  ),
                                ],
                              ),
                              Row(
                                children: [
                                  ProductTable(),
                                ],
                              ),
                            ],
                          )),
                      Expanded(
                        flex: 1,
                        child: Container(
                          height: 200,
                          width: 200,
                          color: Colors.grey[200],
                          child: Text("Sidebar"),
                        ),
                      ),
                    ],
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
