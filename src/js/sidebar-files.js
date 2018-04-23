export const files = [
	"Applications",
	"Desktop",
	"Documents",
	"Downloads",
	"Dropbox",
	"Library",
	"Movies",
	"Music",
	"Pictures",
	"Public",
];


// const growTree = (files) => {
// 	for (let file of files) {
// 		var fileTree = document.getElementById("file-tree");
// 		var item     = document.createElement("LI");
// 		var info     = document.createTextNode(file);
// 		item.appendChild(info);
// 		fileTree.appendChild(item);
// 	}
// };
const growTree = (files) => {
  files.map((file) => {
    var fileTree = document.getElementById("file-tree");
    var item     = document.createElement("LI");
    var info     = document.createTextNode(file);
    item.appendChild(info);
    fileTree.appendChild(item);
  });
};

document.addEventListener("DOMContentLoaded", () => {
   growTree(files);
});
