function Metric(group, name, key) {
    Root.call(this);
    this.group = group;
    this.name = name;
    this.key = key;
}

Metric.inherits(Root);

Metric.method(function toOption() {
	var option = document.createElement('option');
	option.innerHTML = this.name;
	option.value = this.key;
	return option;
});