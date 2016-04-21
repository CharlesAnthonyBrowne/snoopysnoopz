const snoopysnoopz = ((() => {

	const eleOpenStart = IncrementalDOM.elementOpenStart,
		  eleOpenEnd = IncrementalDOM.elementOpenEnd,
		  eleClose = IncrementalDOM.elementClose,
		  currentElement = IncrementalDOM.currentElement,
		  skip = IncrementalDOM.skip,
		  attr = IncrementalDOM.attr,
		  text = IncrementalDOM.text;

	function openTag(head, keyAttr) {
		var dotSplit = head.split('.');
		var hashSplit = dotSplit[0].split('#');

		var tagName = hashSplit[0] || 'div';
		var id = hashSplit[1];
		var className = dotSplit.slice(1).join(' ');

		elementOpenStart(tagName, keyAttr)

		if (id) attr('id', id)
		if (className) attr('class', className)

		return tagName
	}

		function applyAttrsObj(attrsObj) {
			for (const k in attrsObj) {
				attr(k, attrsObj[k])
			}
		}

		function parse(markup) {
			var head = markup[0];
			var attrsObj = markup[1];
			var hasAttrs = attrsObj && attrsObj.constructor === Object;
			var firstChildPos = hasAttrs ? 2 : 1;
			var keyAttr = hasAttrs && attrsObj.key;
			var skipAttr = hasAttrs && attrsObj.skip;

			var tagName = openTag(head, keyAttr);

			if (hasAttrs) applyAttrsObj(attrsObj)

			elementOpenEnd()

			if (skipAttr) {
				skip()
			} else {
				for (let i = firstChildPos, len = markup.length; i < len; i++) {
					const node = markup[i];

					if (node === undefined) continue

					switch (node.constructor) {
						case Array:
							parse(node)
							break
						case Function:
							node(currentElement())
							break
						default:
							text(node)
					}
				}
			}

			elementClose(tagName)
	}

		return parse
}))();
