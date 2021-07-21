$(function () {
	if ($(".summernote").length) {
		$(".summernote").summernote({
			placeholder: "Hello stand alone ui",
			tabsize: 2,
			prettifyHtml: true,
			height: 120,
			toolbar: [
				["style", ["style"]],
				["font", ["bold", "underline", "clear"]],
				["color", ["color"]],
				["para", ["ul", "ol", "paragraph"]],
				["table", ["table"]],
				["insert", ["link", "picture", "video"]],
				["view", ["codeview", "help"]],
			],
		});
		/* Auto format CodeView with indents */
		// var $codeMirror;
		// $summernote.on("summernote.codeview.toggled", event => {
		// 	var editor = $codeMirror || $("textarea.note-codable").data("cmEditor");
		// 	editor.execCommand("selectAll");
		// 	editor.execCommand("indentAuto");
		// 	editor.execCommand("goDocStart");
		// });

		$(".saveTextCode").on("click", function () {
			var markupStr = $(".summernote").summernote("code");
			console.log(markupStr);
		});
	}
});
