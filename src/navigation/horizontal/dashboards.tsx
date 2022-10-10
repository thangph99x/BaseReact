import { useEffect } from "react";
import { Home, Activity, ShoppingCart } from "react-feather";


// [
//   {
//     "id": 1,
//     "title": "Dashboards",
//     "icon": ""
//   },
//   {
//     "id": 2,
//     "title": "Dashboard Child 1",
//     "icon": "",
//     "parent": 1,
//     "navLink": "/dashboard"
//   },
//   {
//     "id": 3,
//     "title": "Dashboard Child 1.1",
//     "icon": "",
//     "parent": 2,
//     "navLink": "#"
//   },
//   {
//     "id": 5,
//     "title": "Dashboard Child 1.2",
//     "icon": "",
//     "parent": 2,
//     "navLink": "#"
//   },
//   {
//     "id": 4,
//     "title": "Menu 2",
//     "icon": "",
//     "navLink": "https://pixinvent.ticksy.com/"
//   }
// ]

// type TTree<T> = {
//   children?: TTree<T>[];
// } & T;

// const removeChild = (roots: any) => {
//   debugger;
//   if(typeof roots !== 'object') {
//     roots.forEach((root: any) => {
//       if (root.children.length <= 0) {
//         delete root.children;
//       } else {
//         root.children.forEach((childNode: any) => {
//           removeChild(childNode);
//         });
//       }
//     });
//   }
// }

// const arrayToTree = (
//   list: any[],
//   { id, parentId }: { id: string; parentId: string }
// ): TTree<any>[] | [] => {
//   /** map between id and array position */
//   const map: number[] = [];
//   const treeList: TTree<any>[] = list as TTree<any>[];

//   let node: TTree<any> & { [parentId: string]: number };
//   /** return value */
//   const roots: TTree<any>[] = [];

//   for (const item of treeList) {
//     node = item as TTree<any> & { [parentId: string]: number };
//     if (node[parentId] && node[parentId] !== 0) {
//       if (treeList[map[node[parentId]]] !== undefined) {
//         treeList[map[node[parentId]]].children.push(node);
//       }
//     } else {
//       roots.push(node);
//     }
//   }
//   return roots;
// };

interface IMenuOrigin {
	id: string,
	title: string,
	children: Array<any>,
	icon: string,
  navLink: string
}

interface IMenuNode {
  id: string,
	title: string,
	children: Array<any>,
	icon: string,
  navLink: string
}

const getMenuOrigin = (original: Array<IMenuOrigin>) => {
  const newMenu: Array<IMenuNode> = []
  for (let menu of original) {
    const iconItem = '';
    const newNode = {
      id: menu.id,
      title: menu.title,
      children: menu.children,
      icon: '',
      navLink: menu.navLink
    };
    newMenu.push(newNode);
    if (newNode.children && newNode.children.length > 0) {
        newNode.children = getMenuOrigin(menu.children);
    }
  }
  return newMenu;
}

var menu = getMenuOrigin(JSON.parse(localStorage.getItem("userMenu")));

const dashboards = [...menu]

console.log('menu: ', menu);

export default dashboards;
